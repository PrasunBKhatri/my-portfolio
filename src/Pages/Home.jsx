import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Hi, I’m Prasun 👋</h1>
      <p>A passionate React developer building modern, responsive web applications.</p>
      <button onClick={() => navigate("/projects")}>
        View My Projects
      </button>
    </section>
  );
};

export default Home;
