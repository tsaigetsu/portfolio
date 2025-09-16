import { useState } from "react";

export default function RepoCard({ name, description, url, openGraphImageUrl }) {

  return (
    <div
      className="card"
    >
      {/* Фон */}
      <img
        src={openGraphImageUrl || "https://via.placeholder.com/250x250?text=No+Image"}
        alt={name || "No name"}
        className="card-image"
      />

      {/* Оверлей */}
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
          href={url || "#"}
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
