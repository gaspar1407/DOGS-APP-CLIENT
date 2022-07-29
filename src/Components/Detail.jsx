import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actions";
import { useParams } from "react-router";
import Loading2 from "./Loading2.jsx";
import "./estilos/Detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const noImg =
    "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80";

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const myDog = useSelector((state) => state.detail); //me traigo el detalle desde el reducer
  // {console.log(myDog)}
  return (
    <div className="fondo2">
      <div className="contenedor_gral">
        {Object.values(myDog).length > 0 ? (
          <div className="contenedor_card">
            <h1 className="name">{myDog.name}</h1>
            <img
              className="img"
              alt="imgDog"
              src={myDog.image ? myDog.image : noImg}
            />
            <div className="info_text1">
              <h4>
                Temperamento:{" "}
                {myDog.temperament ? (
                  myDog.temperament
                ) : myDog.temps ? (
                  myDog.temps.map((e) => (
                    <li key={e.id} className="temp-text">
                      {e.name}.
                    </li>
                  ))
                ) : (
                  <h4>Desconocido / Variable </h4>
                )}
              </h4>
            </div>
            <div className="info_text2">
              <h4>Vida Promedio: {myDog.life_span}</h4>
            </div>
            <div className="info_text3">
              <h4>Altura[cm]: {myDog.height}</h4>
            </div>
            <div className="info_text4">
              <h4>
                Peso[kg]: {myDog.weight[0] === "N" ? "10 - 60" : myDog.weight}
              </h4>
            </div>
          </div>
        ) : (
          <Loading2 />
        )}
      </div>
    </div>
  );
}
