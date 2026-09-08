// import { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2>SKY FOR ALL</h2>

      <div className="social-buttons">
        <a
          href="https://discord.com/invite/xVNs5fFv"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn discord"
        >
          <i className="fa-brands fa-discord"></i>
        </a>

        <a
          href="https://www.instagram.com/openastronomy"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>

      <p className="copyright">©2026 Sky For All / Open Astronomy. All rights reserved in this dimension.</p>
    </footer>
  );
}

export default Footer;
