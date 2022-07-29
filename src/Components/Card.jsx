import React from "react";
import { Link } from "react-router-dom";
import "../Components/estilos/Card.css";

export default function Card(props) {
  const noImg =
    "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80";
  return (
    <React.Fragment>
      <Link
        to={`/inicio/detail/${props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="Card">
          <img
            alt="imagen de perro"
            className="img-card"
            src={props.image ? props.image : noImg}
          ></img>
          <div className="h-card">
            <h2>{props.name}</h2>
            <h3>
              Weight: {props.weight[0] === "N" ? "10 - 60" : props.weight} Kg.
            </h3>
            <h4>
              Temperaments:{" "}
              {Array.isArray(props.temperament) ? (
                props.temperament.map((e) => <li key={e.name}>{e.name}</li>)
              ) : props.temperament ? (
                props.temperament
              ) : (
                <li> Variable / Desconocido</li>
              )}
            </h4>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
