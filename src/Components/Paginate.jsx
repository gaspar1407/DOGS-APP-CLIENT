import React from "react";
import "./estilos/Paginate.css";

export default function Paginate({ dogsXPage, allDogs, paginated }) {
  const pageNumbers = []; //en principio comienza como un array vacio, al q se le pushearan los numeros de pagina

  //recorro el array y tomo el numero que resulta de allDogs/dogsXPage,y lo pusheo a pageNumber
  for (let i = 0; i < Math.ceil(allDogs / dogsXPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <nav>
      <div className="pagination-container">
        {pageNumbers &&
          pageNumbers.map((num) => (
            <div className="numbers-container" key={num}>
              <button className="numbers" onClick={() => paginated(num)}>
                {num}
              </button>
            </div>
          ))}
      </div>
    </nav>
  );
}
