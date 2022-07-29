import {
  GET_DOGS,
  GET_DETAIL,
  GET_DOGSBYNAME,
  ORDER_SORT,
  ORDER_BY_WEIGHT,
  GET_TEMPERAMENTS,
  FILTER_TEMPERAMENT,
  FILTER_BREED,
  ADD_DOG,
} from "./actions";

let initialState = {
  dogs: [],
  all: [],
  findDog: [],
  detail: [],
  filtered: [],
  temperaments: [],
  dogsCreated: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        all: action.payload,
        filtered: action.payload,
      };

    case GET_DOGSBYNAME:
      return {
        ...state,
        findDog: action.payload,
        dogs: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case ORDER_SORT:
      let arr =
        action.payload === "Desc"
          ? state.dogs.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1; // los cambia
              } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1; //los cambia
              } else {
                return 0; //los deja igual
              }
            })
          : state.dogs.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1; // los cambia
              } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
                return 1; //los cambia
              } else {
                return 0; //los deja igual
              }
            });
      return {
        ...state,
        dogs: arr,
      };

    case ORDER_BY_WEIGHT:
      let order = state.dogs;
      if (action.payload === "min") {
        order.sort((a, b) => {
          if (
            parseInt(a.weight[0] === "N" ? "10 - 60" : a.weight.split("-")[0]) <
            parseInt(b.weight[0] === "N" ? "10 - 60" : b.weight.split("-")[0])
          ) {
            return -1; // los cambia
          } else if (
            parseInt(b.weight[0] === "N" ? "10 - 60" : b.weight.split("-")[0]) <
            parseInt(a.weight[0] === "N" ? "10 - 60" : a.weight.split("-")[0])
          ) {
            return 1; //los cambia
          } else {
            return 0; //los deja igual
          }
        });
      } else if (action.payload === "max") {
        order.sort((a, b) => {
          if (
            parseInt(a.weight[0] === "N" ? "10 - 60" : a.weight.split("-")[0]) >
            parseInt(b.weight[0] === "N" ? "10 - 60" : b.weight.split("-")[0])
          ) {
            return -1; // los cambia
          } else if (
            parseInt(b.weight[0] === "N" ? "10 - 60" : b.weight.split("-")[0]) >
            parseInt(a.weight[0] === "N" ? "10 - 60" : a.weight.split("-")[0])
          ) {
            return 1; //los cambia
          } else {
            return 0; //los deja igual
          }
        });
      }
      return {
        ...state,
        filtered: order,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case FILTER_TEMPERAMENT:
      const filter =
        action.payload === "temperament"
          ? state.filtered
          : state.filtered?.filter((data) => {
              let aux =
                action.payload.charAt(0).toUpperCase() +
                action.payload.slice(1);
              if (data.temperament) {
                return data.temperament?.includes(aux);
              }

              if (data.temps) {
                console.log(data.temps);
                return data.temps.find((e) => e.name === action.payload);
              }
            });
      return {
        ...state,
        dogs: filter,
      };
    case FILTER_BREED:
      let filtBreed = state.all;
      // console.log(filtBreed)
      let createdFilter =
        action.payload === "allDogs"
          ? filtBreed
          : action.payload === "createdDogs"
          ? filtBreed.filter((e) => e.createdInDb)
          : filtBreed.filter((e) => !e.createdInDb);
      return {
        ...state,
        dogs: createdFilter,
      };
    case ADD_DOG:
      return {
        ...state,
        dogsCreated: [...state.dogsCreated, action.payload],
        filtered: [...state.dogsCreated, action.payload],
        /* dogs: [...state.dogs, action.payload], */
      };
    default:
      return { ...state };
  }
}
