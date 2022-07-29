import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderSort,
  orderByWeight,
  filterByTemperament,
  filterBreed,
} from "../redux/actions";
import "./estilos/OrderFilter.css";

export function OrderFilter({ setOrder }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderSort(e.target.value));
    setOrder(`Order ${e.target.value}`);
  };

  const handlerOrderByWeight = (e) => {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setOrder(`Order ${e.target.value}`);
  };

  const allTemperament = useSelector((state) => state.temperaments);

  function handleFilterByTemperament(e) {
    e.preventDefault();
    setName(e.target.value);
    dispatch(filterByTemperament(e.target.value));
  }

  function handleFilterByBreed(e) {
    e.preventDefault();
    dispatch(filterBreed(e.target.value));
  }

  useEffect(() => {
    setOrder("Ordenado");
  }, [handleSort, handlerOrderByWeight]);

  return (
    <div>
      {/*  -------------- ORDENAR POR PESO -------------- */}
      <select
        defaultValue={"DEFAULT"}
        onChange={(e) => handlerOrderByWeight(e)}
      >
        <option value="DEFAULT">Ordenar Por Peso </option>
        <option value="min">Menor Peso</option>
        <option value="max">Mayor Peso</option>
      </select>

      {/*  -------------- ORDENAR ALFABETICAMENTE  -------------- */}

      <select defaultValue={"DEFAULT"} onChange={(e) => handleSort(e)}>
        <option value="DEFAULT">Ordenar Alfabeticamente</option>
        <option value="Asc">A-Z</option>
        <option value="Desc">Z-A</option>
      </select>

      {/*  -------------- FILTRAR POR TEMPERAMENTO -------------- */}

      <select
        className="order_select"
        id="btn-order"
        value="temperament"
        defaultValue={"DEFAULT"}
        onChange={(e) => handleFilterByTemperament(e)}
      >
        <option className="order_option">Temperamentos: {name}</option>
        {allTemperament &&
          allTemperament.map((el) => (
            <option className="order_option" value={el.name} key={el.id}>
              {el.name}
            </option>
          ))}
      </select>

      {/*  -------------- FILTRAR POR CREADOS -------------- */}

      <select
        className="order_select"
        id="btn-order"
        onChange={(e) => handleFilterByBreed(e)}
      >
        <option className="order_option" value="allDogs">
          Filtrar Por Creados
        </option>
        <option className="order_option" value="apiDogs">
          Existentes
        </option>
        <option className="order_option" value="createdDogs">
          Creados
        </option>
      </select>

      {/*  -------------- REFRESCAR PAGINA -------------- */}

      <a href="/inicio/home">
        <button className="buttonAllCountries">Reload</button>
      </a>
    </div>
  );
}
