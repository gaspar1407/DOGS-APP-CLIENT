import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogs, getTemperament } from "../redux/actions";
import Cards from "./Cards";
import Paginate from "./Paginate";
import { OrderFilter } from "./OrderFilter";
import "../Components/estilos/Home.css";

/* function mapStateToProps(state) {
  return {
    dogs: state.dogs,
  };
} */

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //guarda la pagina actual, y tiene la constante que setea la pagina actual
  const [dogsXPage, setDogsXPage] = useState(8); //dogs por pagina
  const indexLastDog = currentPage * dogsXPage;
  //el index del ultimo dog es la currentPage, multiplicado por la cantidad de dogs por pagina
  const indexFirstDog = indexLastDog - dogsXPage;
  //el index del primer dog es igual al indice del ultimo perro menos la cantidad de dogs por pagina
  const currentDog = allDogs.slice(indexFirstDog, indexLastDog);
  //toma las porciones que hay en los parametros, desde el index del primer perro [0], hasta el index del ultimo perro[9],por lo que quedarian 9 dogs por pagina
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /* const ITEMS_PER_PAGE = 8;
  const [datosFromApi, setDatosFromApi] = useState(allDogs);
  const [items, setItems] = useState([...allDogs].slice(0, ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(0); 

  const nextHandler = () => {
    const totalDeElementos = datosFromApi.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * ITEMS_PER_PAGE;

    if (firstIndex === totalDeElementos) return;

    setItems([...datosFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(nextPage);
  };

  const previousHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;
    const firstIndex = prevPage * ITEMS_PER_PAGE;
    setItems([...datosFromApi].splice(firstIndex, ITEMS_PER_PAGE));
    setCurrentPage(prevPage);
  };*/

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperament());
  }, [dispatch]);

  return (
    <div className="home-container">
      <OrderFilter setOrder={setOrder} />
      <Paginate
        /* currentPage={currentPage} */
        dogsXPage={dogsXPage}
        allDogs={allDogs.length}
        paginated={paginated}
      />
      <Cards className="Cards-container" dogs={currentDog} />
    </div>
  );
}
