// utils/github.js
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function getStarredRepos() {
  const query = `
    query {
      viewer {
        starredRepositories(first: 8, orderBy: {field: STARRED_AT, direction: DESC}) {
          nodes {
            name
            homepageUrl
            url
            openGraphImageUrl
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Authorization": `bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    });

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      return [];
    }

    if (!data.data || !data.data.viewer || !data.data.viewer.starredRepositories) {
      console.error("Unexpected API response structure:", data);
      return [];
    }
    
    return data.data.viewer.starredRepositories.nodes;
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
    return [];
  }
}