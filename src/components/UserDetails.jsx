import React from "react";
import "./UserDetails.css";
import TextoConEstilo from "./TextoConEstilo"; 

const UserDetails = ({ character }) => {
  return (
    <>
      <img src={character.image} alt={`avatar de ${character.name}`} />
      <div className="texto">
        <h3>{character.name}</h3>
        <p> Estatus: <TextoConEstilo texto={character.status} /></p>
        <p> Especie: {character.species}</p>
        <p> Genero : {character.gender}</p>
      </div>
    </>
  );
};

export default UserDetails;
 