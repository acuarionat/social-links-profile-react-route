import React from "react";
import CharacterSection from "./CharacterSection";
import Episode from "./Episode";
import "./Character.css";

const Character = ({ personaje, episodios }) => {
  return (
    <div className="personaje">
      <CharacterSection personaje={personaje} />
      <Episode episodios={episodios} />
    </div>
  );
};

export default Character;