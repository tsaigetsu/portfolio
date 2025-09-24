import React from 'react';

export default function MoreBtn({ text }) {
  const handleScrollToPortfolio = (e) => {
    e.preventDefault();

    const portfolioSection = document.getElementById('portfolio');

    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href="#portfolio" 
      className="more-btn"
      onClick={handleScrollToPortfolio}
    >
      {text}
    </a>
  );
}