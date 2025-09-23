import React from 'react';
import Icons from '../assets/symbol-defs.svg?raw';

export default function(){
    return(
        <footer className="footer-section">
            <div className="footer-wrapper">
                <h2 className="second-heading">Ready to increase your sales?<br/> Contact me</h2>
                <div className="footer-links-wrapper">
                    <ul className="footer-links">
                        <li className="footer-links-items">
                            <a href="mailto:vstremetskyi@gmail.com?subject=Partnership%20Proposal" className="footer-links-link">
                            {/* <svg className="footer-links-icon">
                                <use href={`${Icons}#icon-email`} />
                            </svg> */}
                            vstremetskyi@gmail.com
                            </a>
                        </li>
                        <li className="footer-links-items">
                            <a href="https://t.me/lcc_wladislav" className="footer-links-link">
                            {/* <svg className="footer-links-icon">
                                <use href={`${Icons}#icon-telegram`} />
                            </svg> */}
                            @lcc_wladislav
                            </a>
                        </li>
                        <li className="footer-links-items">
                            <a href="https://www.instagram.com/lcc_wladislav" className="footer-links-link">
                            {/* <svg className="footer-links-icon">
                                <use href={`${Icons}#icon-instagram`} />
                            </svg> */}
                            @lcc_wladislav
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}