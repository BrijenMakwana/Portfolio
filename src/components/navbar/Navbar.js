import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <a href="#about" className="nav-link">
        about
      </a>
      <a href="#skills" className="nav-link">
        skills
      </a>
      <a href="#projects" className="nav-link">
        projects
      </a>
      <a href="#achievements" className="nav-link">
        achievements
      </a>
      <a href="#articles" className="nav-link">
        articles
      </a>
      <a href="#apps" className="nav-link">
        apps
      </a>
      <a href="#others" className="nav-link">
        others
      </a>
      <a href="#contact" className="nav-link">
        contact
      </a>
    </nav>
  );
}
