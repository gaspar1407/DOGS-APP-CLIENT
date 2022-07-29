import axios from "axios";
export const GET_DOGS = "OBTENER TODOS LOS PERROS";
export const GET_DOGSBYNAME = "OBTENER PERRO POR NOMBRE";
export const GET_DETAIL = "OBTENER DETALLE DEL PERRO";
export const ORDER_SORT = "ORDENAR POR NOMBRE";
export const ORDER_BY_WEIGHT = "ORDENAR POR PESO";
export const GET_TEMPERAMENTS = "OBTENER TODOS LOS TEMPERAMENTOS";
export const FILTER_TEMPERAMENT = "FILTRAR POR TEMPERAMENTOS";
export const FILTER_BREED = "FILTRAR POR CREADOS";
export const ADD_DOG = "AGREGAR PERRO";

export function getDogs() {
  return async function (dispatch) {
    const res = await fetch("https://pidogs-app.herokuapp.com/dogs");
    const r = await res.json();
    return dispatch({ type: GET_DOGS, payload: r });
  };
}

export function getDogByName(name) {
  return async function (dispatch) {
    const res = await fetch(
      `https://pidogs-app.herokuapp.com/dogs?name=${name}`
    );
    const r = await res.json();
    return dispatch({ type: GET_DOGSBYNAME, payload: r });
    //.then((r) => console.log(r));
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    const res = await fetch(`https://pidogs-app.herokuapp.com/dogs/${id}`);
    const r = await res.json();
    /* console.log(r); */
    return dispatch({ type: GET_DETAIL, payload: r });
  };
}

export function getTemperament() {
  return async function (dispatch) {
    const res = await fetch("https://pidogs-app.herokuapp.com/temperament");
    const r = await res.json();
    dispatch({
      type: GET_TEMPERAMENTS,
      payload: r,
    });
  };
}

export function filterByTemperament(payload) {
  /* console.log(payload); */
  return {
    type: FILTER_TEMPERAMENT,
    payload,
  };
}

export function orderSort(payload) {
  return {
    type: ORDER_SORT,
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
}

export function filterBreed(value) {
  return {
    type: FILTER_BREED,
    payload: value,
  };
}

export function createDog(obj) {
  return async function (dispatch) {
    const post = (
      await axios.post("https://pidogs-app.herokuapp.com/dogs", obj)
    ).data;
    console.log("soy action", post);
    return dispatch({ type: ADD_DOG, payload: post });
  };
}
