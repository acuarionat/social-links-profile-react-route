import React from "react";
import "./Episode.css";

const Episode = ({ episodios }) => {
  return (
    <div className="episodio">
      {episodios.map((episodio) => (
        <div key={episodio.id} className="episodioText">
          <h3>Nombre: {episodio.name} </h3>
          <p>Fecha: {episodio.air_date} </p>
        </div>
      ))}
    </div>
  );
};

export default Episode;