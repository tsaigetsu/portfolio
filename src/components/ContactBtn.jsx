import React from 'react';

export default function ContactBtn() {
  const handleContactClick = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }

    window.location.href = 'mailto:vstremetskyi@gmail.com?subject=Partnership%20Proposal';
  };

  return (
    <button className="contact-btn" onClick={handleContactClick}>
      CONTACT
    </button>
  );
}