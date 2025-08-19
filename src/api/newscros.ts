// api/news.ts
export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "Artificial Intelligence OR AI";
  const page = searchParams.get("page") || "1";

  const NEWSAPI_KEY = process.env.NEWSAPI_KEY!;
  const NEWSAPI_BASE_URL = "https://newsapi.org/v2/everything";

  const res = await fetch(
    `${NEWSAPI_BASE_URL}?q=${encodeURIComponent(query)}&page=${page}&pageSize=10&apiKey=${NEWSAPI_KEY}`
  );

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
