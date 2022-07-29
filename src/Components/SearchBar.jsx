import React, { useState } from "react";
import { getDogByName } from "../redux/actions";
import { connect } from "react-redux";
import "./estilos/SearchBar.css";

function SearchBar({ getDogByName }) {
  const [dog, setDog] = useState("");

  function handleChange(evento) {
    setDog(evento.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getDogByName(dog);
    setDog("");
  }

  return (
    <div className="search-container">
      <form onSubmit={(e) => handleSubmit(e)} className="search-form">
        <div style={{ marginRight: "2rem" }}>
          <input
            style={{ padding: "16px" }}
            placeholder="Buscar Raza..."
            autoComplete="off"
            type="search"
            id="dog"
            value={dog}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn-search" type="submit">
          BUSCAR
        </button>
      </form>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    findDog: state.findDog,
  };
}

export default connect(mapStateToProps, { getDogByName })(SearchBar);
