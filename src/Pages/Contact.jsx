import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>
        Email:{" "}
        <a href="mailto:prasunbikramkhatri@gmail.com">
          prasunbikramkhatri@gmail.com
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/prasun-bikram-khatri-959521343"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.linkedin.com/in/prasun-bikram-khatri-959521343
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/PrasunBKhatri"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/PrasunBKhatri
        </a>
      </p>
    </section>
  );
};

export default Contact;
