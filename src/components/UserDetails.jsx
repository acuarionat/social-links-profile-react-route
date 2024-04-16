import React from "react";
import "./UserDetails.css";

const UserDetails = ({character}) => {
  return (
    <>
      <img src={character.image} alt={`avatar de ${character.name}`} />
      <div class="texto">
      <h3>{character.name}</h3>
      <p> Estatus: {character.status}</p>
      <p> Especie: {character.species}</p>
      </div>
    </>
  );
};

export default UserDetails;