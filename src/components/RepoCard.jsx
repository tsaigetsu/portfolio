  import { useEffect, useRef } from 'react';

  export default function RepoCard({ name, description, websiteUrl, openGraphImageUrl }) {
    const cardRef = useRef(null);
    

    useEffect(() => {
      const timer = setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.classList.add('fade-in');
        }
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        className="card"
        ref={cardRef}
      >
        <img
          src={openGraphImageUrl || "https://via.placeholder.com/250x250?text=No+Image"}
          alt={name || "No name"}
          className="card-image"
        />

        <div
          className="card-overlay"
        >
          <h3 className="card-name">
            {name || "No name"}
          </h3>
          <p className="card-paragraf">
            {description || "No description available"}
          </p>
          <a
            href={websiteUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            CHECK IT
          </a>
        </div>
      </div>
    );
  }
