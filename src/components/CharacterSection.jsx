import React from "react";
import "./CharacterSection.css";
import TextoConEstilo from "./TextoConEstilo";

const CharacterSection = ({ personaje }) => {
  return (
    <>
      <img src={personaje.image} alt={`avatar de ${personaje.name}`} />
      <div className="descripcion">
        <h2>{personaje.name}</h2>
        <p>
          Estatus-<TextoConEstilo texto={personaje.status} />
        </p>
      </div>
    </>
  );
};

export default CharacterSection;
