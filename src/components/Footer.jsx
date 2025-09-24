import React from 'react';
import Icons from '../assets/symbol-defs.svg?raw';
import ContactBtn from './ContactBtn';

export default function Footer() {
  const svgSpriteRef = React.useRef(null);

  React.useEffect(() => {
    // Inject the SVG sprite string into the div once the component mounts
    if (svgSpriteRef.current) {
      svgSpriteRef.current.innerHTML = Icons;
    }
  }, []);

  return (
    <footer className="footer-section">
      {/* This hidden div holds the SVG sprite content */}
      <div
        ref={svgSpriteRef}
        style={{
          display: 'none',
          position: 'absolute',
          width: 0,
          height: 0,
          overflow: 'hidden',
        }}
      ></div>

      <div className="footer-wrapper">
        <div className='contact-wrapper'>
          <h2 className="second-heading-f">
            Ready to increase your sales?<br/> Contact me
          </h2>
          <ContactBtn/>
        </div>
        <div className="footer-links-wrapper">
          <ul className="footer-links">
            <li className="footer-links-item">
              <a href="mailto:vstremetskyi@gmail.com?subject=Partnership%20Proposal" target="_blank" className="footer-links-link">
                <svg className="footer-links-icon">
                  <use href="#icon-email" />
                </svg>
                vstremetskyi@gmail.com
              </a>
            </li>
            <li className="footer-links-item">
              <a href="https://t.me/lcc_wladislav" target="_blank" className="footer-links-link">
                <svg className="footer-links-icon">
                  <use href="#icon-telegram" />
                </svg>
                @lcc_wladislav
              </a>
            </li>
            <li className="footer-links-item">
              <a href="https://www.instagram.com/lcc_wladislav" target="_blank" className="footer-links-link">
                <svg className="footer-links-icon">
                  <use href="#icon-instagram" />
                </svg>
                @lcc_wladislav
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}