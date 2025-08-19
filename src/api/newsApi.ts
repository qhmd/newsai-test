import ky from "ky";

const NYT_API_KEY = import.meta.env.VITE_NYT_API_KEY;
const NYT_BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const NEWSAPI_KEY = import.meta.env.VITE_NEWSAPI_KEY;
const NEWSAPI_BASE_URL = "https://newsapi.org/v2/everything";

const THENEWS_API_KEY = import.meta.env.VITE_THENEWS_API_KEY;
const THNEWS_BASE_URL = "https://api.thenewsapi.com/v1/news/all";
export const fetchNews = async ({
  page = 0,
  query = "",
}: {
  page?: number;
  query?: string;
}): Promise<{ docs: NewsDefault[]; meta: any }> => {
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

  const newsApiUrl = `${NEWSAPI_BASE_URL}?q=${encodeURIComponent(
    query || "Artificial Intelligence OR AI"
  )}&page=${page + 1}&pageSize=10&apiKey=${NEWSAPI_KEY}`;
  const newsApiRes = await ky.get(newsApiUrl).json<any>();

  const newsApiDocs: NewsDefault[] =
    newsApiRes?.articles?.map((article: any, idx: number) => ({
      id: article.url || `newsapi-${page}-${idx}`,
      title: article.title,
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
    })) || [];



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


  const mergedDocs: NewsDefault[] = [...nytDocs, ...newsApiDocs, ...newsdataDocs];

  mergedDocs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return {
    docs: mergedDocs,
    meta: {
      nyt: nytRes?.response?.meta,
      newsApi: {
        totalResults: newsApiRes?.totalResults,
      },
    },
  };
};
