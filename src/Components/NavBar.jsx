import React from "react";
import { NavLink } from "react-router-dom";
import "./estilos/NavBar.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to={"/"}>
        <img
          src="https://gogeticons.com/frontend/web/icons/data/2/6/3/2/4/pawprint_512.png"
          alt="LogoApp"
        />
      </NavLink>
      <div className="div-1">
        <a id="home" href="/inicio/home">
          Home
        </a>
      </div>
      <div className="div-2">
        <NavLink id="dog-created" to={"/inicio/dogCreated"}>
          Create Dog
        </NavLink>
      </div>
      <div className="div-3">
        <SearchBar />
      </div>
    </nav>
  );
}
