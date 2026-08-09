import { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
  fetch("https://api.countapi.xyz/hit/skyforall-website/SkyForAll-visitors")
    .then((res) => {
      console.log("Status:", res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setVisitors(data.value);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}, []);

  return (
    <footer className="footer">
      <h2>SKY FOR ALL</h2>

      <p>Made with ❤️ for astronomy lovers.</p>

      <div className="social-buttons">
        <a
          href="https://discord.com/invite/xVNs5fFv"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn discord"
        >
          <i className="fa-brands fa-discord"></i>
          Discord
        </a>

        <a
          href="https://www.instagram.com/openastronomy"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          <i className="fa-brands fa-instagram"></i>
          Instagram
        </a>
      </div>

      <div className="visitor-counter">
        <i className="fa-solid fa-users"></i>

        <span>
          Visitors:{' '}
          {visitors !== null ? visitors.toLocaleString() : 'Loading...'}
        </span>
      </div>

      <p>©2026 Sky For All</p>
    </footer>
  );
}

export default Footer;
