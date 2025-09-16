// Portfolio.jsx
import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import { getPinnedRepos } from "../lib/github";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    async function fetchRepos() {
      const data = await getPinnedRepos();
      setRepos(data);
    }
    fetchRepos();
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className="portfolio-section">
    <div className="portfolio-wrapper">
      {repos.slice(0, visibleCount).map(repo => (
        <RepoCard
        key={repo.name}
        name={repo.name}
        description={repo.description}
        url={repo.url}
        openGraphImageUrl={repo.openGraphImageUrl}
      />
      ))}
    </div>

    {visibleCount < repos.length && (
      <button className="load-more-btn" onClick={loadMore}>
        LOAD MORE
      </button>
    )}
  </section>
  );
}