export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const rssUrl = 'https://www.irobotnews.com/rss/allArticle.xml';

  const response = await fetch(rssUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'text/xml'
    }
  });

  const text = await response.text();

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
