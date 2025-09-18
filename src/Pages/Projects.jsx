import React from "react";
import "../App.css";

const Projects = () => {
  const projectList = [
    { name: "Portfolio Website", desc: "A modern portfolio built with React & CSS" },
    { name: "E-commerce Store", desc: "React + API integration for shopping experience" },
    { 
    name: "Pocket Doctor", 
    desc: "Pocket Doctor is an AI-powered health assistant that combines appointment booking with basic health guidance — a tool designed for everyday users to make more informed health decisions." 
    },
    { 
    name: "Hospital Management System", 
    desc: "Developed a Python-based Hospital Management System with CLI and Tkinter GUI for efficient patient and doctor management." 
    },
  ];

  return (
    <section>
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
