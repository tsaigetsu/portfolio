// utils/github.js
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function getStarredRepos() {
  const query = `
    query {
      viewer {
        starredRepositories(first: 8, orderBy: {field: STARRED_AT, direction: DESC}) {
          nodes {
            name
            description
            homepageUrl
            url
            openGraphImageUrl
            object(expression: "HEAD:README.md") {
              ... on Blob {
                text
              }
            }
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

    const repos = data.data?.viewer?.starredRepositories?.nodes || [];
    return repos.map(repo => ({
      name: repo.name,
      description: repo.object ? repo.object.text : repo.description,
      homepageUrl: repo.homepageUrl,
      url: repo.url,
      openGraphImageUrl: repo.openGraphImageUrl,
    }));
    
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
    return [];
  }
}