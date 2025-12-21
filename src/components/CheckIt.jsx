import React from 'react';

export default function CheckIt({ text = 'CHECK IT', href = '#' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="checkit-btn"
    >
      {text}
    </a>
  );
}
