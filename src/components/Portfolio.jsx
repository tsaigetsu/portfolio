import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import { getStarredRepos } from "../lib/github";
import { useTransition, animated } from "@react-spring/web";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const sectionClass = `portfolio-section ${visibleCount === 4 ? 'initial-padding' : ''}`;

  useEffect(() => {
    async function fetchRepos() {
      try {
        const data = await getStarredRepos();
        setRepos(data);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
        setRepos([]);
      } finally {
        setIsLoading(false);
        setTimeout(() => {
          setIsContentLoaded(true);
        }, 500);
      }
    }
    fetchRepos();
  }, []);

  const transitions = useTransition(
    repos.slice(0, visibleCount),
    {
      keys: (item) => item.name,
      from: { opacity: 0, transform: "translateY(50px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(50px)" },
      trail: 100,
    }
  );

  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section className={sectionClass} id="portfolio">
      <div className={`portfolio-wrapper ${isContentLoaded ? 'loaded-content' : ''}`}>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="skeleton-card"></div>
          ))
        ) : (
          transitions((style, repo) => (
            <animated.div style={style}>
              <RepoCard
                key={repo.name}
                name={repo.name}
                websiteUrl={repo.homepageUrl}
                url={repo.url}
                openGraphImageUrl={repo.openGraphImageUrl}
              />
            </animated.div>
          ))
        )}
      </div>

      {visibleCount < repos.length && (
        <button className="load-btn" onClick={loadMore}>
          LOAD MORE
        </button>
      )}
    </section>
  );
}