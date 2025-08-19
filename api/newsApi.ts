import ky from "ky";

const NYT_API_KEY = import.meta.env.VITE_NYT_API_KEY;
const NYT_BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const FINLIGHT_API_KEY = import.meta.env.VITE_FINLIGHT_API_KEY;
const FINLIGHT_BASE_URL = "https://api.finlight.me/v2/articles";

const THENEWS_API_KEY = import.meta.env.VITE_THENEWS_API_KEY;
const THNEWS_BASE_URL = "https://api.thenewsapi.com/v1/news/all";
export const fetchNews = async ({
  page = 0,
  query = "",
}: {
  page?: number;
  query?: string;
}): Promise<{ docs: NewsDefault[]}> => {
  const nytQuery = `("Artificial Intelligence" OR "AI") ${query}`;
  const nytUrl = `${NYT_BASE_URL}?q=${encodeURIComponent(
    nytQuery
  )}&page=${page}&api-key=${NYT_API_KEY}`;
  const nytRes = await ky.get(nytUrl).json<any>();
  const nytDocs: NewsDefault[] =
    nytRes?.response?.docs?.map((doc: any) => ({
      id: doc._id,
      title: doc.headline.main,
      url: doc.web_url,
      imageUrl: doc.multimedia?.default?.url,
      publishedAt: doc.pub_date,
    })) || [];


  const finlightBody = {
    query: query.trim() ? `(AI OR "artificial intelligence") AND ${query}` : "(AI OR \"artificial intelligence\")",
    language: "en",
    pageSize: 10,
    page: page + 1,
    includeContent: false
  };

  const finlightRes = await ky.post(FINLIGHT_BASE_URL, {
    headers: {
      "X-API-KEY": FINLIGHT_API_KEY,
      "Content-Type": "application/json",
    },
    json: finlightBody,
  }).json<any>();

  const finlightDocs: NewsDefault[] = (finlightRes.articles || []).map((article: any, idx: number) => ({
    id: article.link || `finlight-${page}-${idx}`,
    title: article.title,
    url: article.link,
    imageUrl: article.images?.[1] || null,
    publishedAt: article.publishDate,
  }));



  const baseQuery = "(AI | artificial intelligence)";

  const newsdataQuery = query.trim()
    ? `${query} + ${baseQuery}`
    : baseQuery;

  const newsdataUrl = `${THNEWS_BASE_URL}?api_token=${THENEWS_API_KEY}&search=${encodeURIComponent(newsdataQuery)}&page=${page + 1}&limit=3`;
  const newsdataRes = await ky.get(newsdataUrl).json<any>();
  const newsdataDocs: NewsDefault[] =
    newsdataRes?.results?.map((article: any, idx: number) => ({
      id: article.article_id || `newsdata-${page}-${idx}`,
      title: article.title,
      url: article.link,
      imageUrl: article.image_url,
      publishedAt: article.pubDate,
    })) || [];


  const mergedDocs: NewsDefault[] = [...nytDocs, ...finlightDocs, ...newsdataDocs];

  mergedDocs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return {
    docs: mergedDocs,
  };
};