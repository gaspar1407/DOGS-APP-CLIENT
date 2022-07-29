import React, { useState, useEffect } from "react";
import { createDog, getTemperament } from "../redux/actions";
import { connect } from "react-redux";
import "./estilos/Form.css";

function Form(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState({});
  const [weightMin, setWeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");
  const [heightMin, setHeightMin] = useState("");
  const [heightMax, setHeightMax] = useState("");
  const [life_spanMin, setLifeSpanMin] = useState("");
  const [life_spanMax, setLifeSpanMax] = useState("");
  const [temps, setTemps] = useState([]);
  useEffect(() => {
    props.getTemperament();
  }, []);

  function validateValue({
    name,
    weightMin,
    weightMax,
    heightMin,
    heightMax,
    life_spanMin,
    life_spanMax,
  }) {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    } else if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(name)) {
      errors.name = "Name is invalid";
    }
    if (!weightMin) {
      errors.weightMin = "weight-Min es requerido";
    } else if (weightMin < 1) {
      errors.weightMin = "weight-Min es invalido";
    }
    if (!weightMax) {
      errors.weightMax = "weight-Max es requerido";
    } else if (weightMax < 1) {
      errors.weightMax = "weight-Max es invalido";
    }
    if (weightMin > weightMax) {
      errors.weightMin = "Peso Minimo no puede superar al Maximo";
    }
    if (!heightMin) {
      errors.heightMin = "height-Min es requerido";
    } else if (heightMin < 1) {
      errors.heightMin = "height-Min es invalido";
    }
    if (!heightMax) {
      errors.heightMax = "height-Max es requerido";
    } else if (heightMax < 1) {
      errors.heightMax = "height-Max es invalido";
    }
    if (heightMin > heightMax) {
      errors.heightMin = "Altura Minima no puede superar la Maxima";
    }
    if (!life_spanMin) {
      errors.life_spanMin = "life_span-Min es requerido";
    } else if (life_spanMin < 1) {
      errors.life_spanMin = "life_span-Min es invalido";
    }
    if (!life_spanMax) {
      errors.life_spanMax = "life_span-Max es requerido";
    } else if (life_spanMax < 1) {
      errors.life_spanMax = "life_span-Max es invalido";
    }
    if (life_spanMin > life_spanMax) {
      errors.life_spanMin =
        "Esperanza de Vida Minima no puede superar la Maxima";
    }
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    let obj = {
      name,
      height: `${heightMin} - ${heightMax}`,
      weight: `${weightMin} - ${weightMax}`,
      life_span: `${life_spanMin} - ${life_spanMax}`,
      temperament: temps,
    };
    console.log(error);
    if (Object.keys(error).length > 0) {
      return alert("No se pudo crear el perro");
    } else {
      setName("");
      setWeightMin("");
      setWeightMax("");
      setHeightMin("");
      setHeightMax("");
      setLifeSpanMin("");
      setLifeSpanMax("");
      setTemps([]);
      /* setError({}); */
      props.createDog(obj);
      return alert("Perro Creado");
    }
  }

  function handleSelect(value) {
    value.preventDefault();
    const set = new Set([
      ...(temps ? new Set(temps) : null),
      value.target.value,
    ]);
    setTemps([...set]);
  }

  function deleteTemp(t) {
    setTemps(temps.filter((c) => c !== t.target.name));
    //console.log(temps);
  }

  return (
    <div className="DivForm">
      <form
        className="form-container"
        onSubmit={handleSubmit}
        onChange={() =>
          setError(
            validateValue({
              name,
              weightMin,
              weightMax,
              heightMin,
              heightMax,
              life_spanMin,
              life_spanMax,
            })
          )
        }
      >
        <h1 className="newDog">Crear Nueva Raza</h1>
        {/* -----------------NOMBRE------------------------ */}
        Nombre:
        <label a="name">
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          {error.name && <p>{error.name}</p>}
        </label>
        {/* -----------------PESO MINIMO------------------------ */}
        Peso Minimo:
        <label a="weight-min">
          <input
            id="weight-min"
            name="weight-min"
            value={weightMin}
            type="number"
            placeholder="weight-min"
            onChange={(e) => setWeightMin(e.target.value)}
            required
          />
          {error.weightMin && <p>{error.weightMin}</p>}
        </label>
        {/* -----------------PESO MAXIMO------------------------ */}
        Peso Maximo:
        <label a="weight-max">
          <input
            id="weight-max"
            name="weight-max"
            value={weightMax}
            type="number"
            placeholder="weight-max"
            onChange={(e) => setWeightMax(e.target.value)}
            required
          />
          {error.weightMax && <p>{error.weightMax}</p>}
        </label>
        {/* -----------------ALTURA MINIMA------------------------ */}
        Altura Minima:
        <label a="height-min">
          <input
            id="height-min"
            name="height-min"
            type="number"
            value={heightMin}
            placeholder="height-min"
            onChange={(e) => setHeightMin(e.target.value)}
            required
          />
          {error.heightMin && <p>{error.heightMin}</p>}
        </label>
        {/* -----------------ALTURA MAXIMA------------------------ */}
        Altura Maxima:
        <label a="height-max">
          <input
            id="height-max"
            name="height-max"
            value={heightMax}
            type="number"
            placeholder="height-max"
            onChange={(e) => setHeightMax(e.target.value)}
            required
          />
          {error.heightMax && <p>{error.heightMax}</p>}
        </label>
        {/* -----------------ESPERANZA DE VIDA MIN------------------------ */}
        Esperanza de Vida Min:
        <label a="life_span-min">
          <input
            id="life_span-min"
            name="life_span-min"
            value={life_spanMin}
            type="number"
            placeholder="life_span-min"
            onChange={(e) => setLifeSpanMin(e.target.value)}
            required
          />
          {error.life_spanMin && <p>{error.life_spanMin}</p>}
        </label>
        {/* -----------------ESPERANZA DE VIDA MAX------------------------ */}
        Esperanza de Vida Max:
        <label a="life_span-max">
          <input
            id="life_span-max"
            name="life_span-max"
            value={life_spanMax}
            type="number"
            placeholder="life_span-max"
            onChange={(e) => setLifeSpanMax(e.target.value)}
            required
          />
          {error.life_spanMax && <p>{error.life_spanMax}</p>}
        </label>
        {/* -----------------TEMPERAMENTOS------------------------ */}
        Temperament:
        <label a="temperament">
          <select
            className="temperament"
            name="temperament"
            multiple
            onChange={(value) => handleSelect(value)}
          >
            {props.temperaments.map((temp) => (
              <option key={temp.id} value={temp.name}>
                {temp.name}
              </option>
            ))}
          </select>
        </label>
        <div className="temperament">
          <ul>
            {temps.map((el) => {
              return (
                <div className="CountriesList" key={el}>
                  <span className="lista">
                    {el}
                    <button
                      key={el}
                      name={el}
                      className="closeButton"
                      onClick={(e) => {
                        deleteTemp(e);
                      }}
                    >
                      ❌
                    </button>
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
        {/* -----------------INPUT CREAR PERRO------------------------ */}
        <input type="submit" value={"Crear Perro"} className="createActivity" />
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    createDog: (obj) => dispatch(createDog(obj)),
    getTemperament: () => dispatch(getTemperament()),
  };
}

function mapStateToProps(state) {
  return {
    temperaments: state.temperaments,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
