import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Prasun Bikram Khatri. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://github.com/PrasunBKhatri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/prasun-bikram-khatri-959521343"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:prasunbikramkhatri@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
