import React from "react";
import "../App.css";
import profilePic from "../assets/profile.jpg"; 

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <img 
          src={profilePic} 
          alt="Prasun Bikram Khatri" 
          className="profile-pic" 
        />
        <p>
          Hello! I'm a passionate full-stack developer with a strong focus on
          creating intuitive and performant web applications. My journey in web
          development began over 1 year ago when I built my first website using
          HTML and CSS.
        </p>
        <p>
          Since then, I've expanded my skills to include modern JavaScript
          frameworks like React and Vue.js, backend technologies such as Node.js
          and Python, and database systems including MongoDB and PostgreSQL.
        </p>
        <p>
          I believe in writing clean, maintainable code and staying up-to-date
          with the latest industry trends and best practices. My approach to
          development is centered around solving real problems and creating
          exceptional user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
