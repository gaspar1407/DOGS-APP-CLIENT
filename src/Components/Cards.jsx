import React from "react";
import Card from "./Card";
import Loading from "./Loading";
import "../Components/estilos/Cards.css";
import "../Components/estilos/Loading.css";

export default function Cards({ dogs }) {
  /* console.log(dogs); */
  return (
    <React.Fragment>
      <div className="card-container">
        {dogs.length > 0 ? (
          dogs.map((e) => (
            <Card
              key={e.id}
              image={e.image}
              name={e.name}
              weight={e.weight[0] === "N" ? "10 - 60" : e.weight}
              temperament={e.temperament || e.temps}
              id={e.id}
            />
          ))
        ) : (
          <Loading className="loader" />
        )}
      </div>
    </React.Fragment>
  );
}
