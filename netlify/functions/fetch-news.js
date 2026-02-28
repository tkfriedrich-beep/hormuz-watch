const KEYWORDS = [
  "Operation Epic Fury",
  "Tehran explosions",
  "Hormuz closure",
  "Khamenei",
  "Iran strikes",
  "Operation Roaring Lion",
];

const SOURCE_CONFIDENCE = {
  "Associated Press": 0.95,
  "Reuters": 0.95,
  "AP": 0.95,
  "BBC News": 0.90,
  "Al Jazeera English": 0.80,
  "Al Jazeera": 0.80,
  "CNN": 0.82,
  "The New York Times": 0.88,
  "The Washington Post": 0.88,
  "The Guardian": 0.85,
  "IRNA": 0.60,
  "Press TV": 0.55,
  "Fars News Agency": 0.55,
  "Tasnim News Agency": 0.58,
  "RT": 0.50,
};

function getConfidence(sourceName) {
  if (!sourceName) return 0.5;
  for (const [key, score] of Object.entries(SOURCE_CONFIDENCE)) {
    if (sourceName.toLowerCase().includes(key.toLowerCase())) return score;
  }
  return 0.65;
}

function categorize(title, description) {
  const text = `${title} ${description}`.toLowerCase();

  const kineticTerms = ["strike", "bomb", "missile", "attack", "military", "killed", "casualt", "explosion", "intercept", "target", "defense", "weapon", "troops", "navy", "air force"];
  const diplomaticTerms = ["diplomat", "negotiat", "un security", "sanction", "ambassador", "summit", "ceasefire", "treaty", "resolution", "condemn"];
  const economicTerms = ["oil", "crude", "market", "trade", "economy", "price", "shipping", "hormuz", "barrel", "energy", "supply"];

  const kineticScore = kineticTerms.filter((t) => text.includes(t)).length;
  const diplomaticScore = diplomaticTerms.filter((t) => text.includes(t)).length;
  const economicScore = economicTerms.filter((t) => text.includes(t)).length;

  if (kineticScore >= diplomaticScore && kineticScore >= economicScore) return "Kinetic";
  if (diplomaticScore >= economicScore) return "Diplomatic";
  return "Economic";
}

export default async (req) => {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: "NEWS_API_KEY not configured",
        articles: [],
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const query = encodeURIComponent(KEYWORDS.join(" OR "));
    const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&pageSize=30&language=en&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "ok") {
      return new Response(
        JSON.stringify({ error: data.message || "API error", articles: [] }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const articles = (data.articles || []).map((article) => ({
      id: Buffer.from(article.url || Math.random().toString()).toString("base64").slice(0, 16),
      title: article.title,
      description: article.description,
      source: article.source?.name || "Unknown",
      url: article.url,
      publishedAt: article.publishedAt,
      category: categorize(article.title || "", article.description || ""),
      confidence: getConfidence(article.source?.name),
    }));

    return new Response(
      JSON.stringify({
        articles,
        fetchedAt: new Date().toISOString(),
        keywords: KEYWORDS,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message, articles: [] }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config = {
  path: "/api/news",
};
