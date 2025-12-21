  import React from 'react';
  import CheckIt from './CheckIt';

  export default function RepoCard({ name, description, websiteUrl, openGraphImageUrl }) {
    return (
      <div className="card">
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
          <CheckIt text="CHECK IT" href={websiteUrl || "#"} />
        </div>
      </div>
    );
  }
