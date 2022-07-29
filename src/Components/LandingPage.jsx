import React from "react";
import { Link } from "react-router-dom";
import "./estilos/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="Landing-container">
      <div id="h1">
        <h1>WELCOME ON DOGS APP</h1>
      </div>
      <br />
      <div className="btn-container">
        <Link
          className="button"
          to="/inicio/home"
          style={{ textDecoration: "none" }}
        >
          <span className="btn">VIEW DOGS</span>
        </Link>
      </div>
    </div>
  );
}
