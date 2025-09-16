// utils/getPinnedRepos.js
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const USERNAME = import.meta.env.VITE_GITHUB_USER;

export async function getPinnedRepos() {
  const query = `
    {
      user(login: "${USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              openGraphImageUrl
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
  return data.data.user.pinnedItems.nodes;
}
