import React from "react";
import CharacterSection from "./CharacterSection";
import Episode from "./Episode";
import "./Character.css";

const Character = ({ personaje, episodios }) => {
  return (
    <div className="personaje">
      <CharacterSection personaje={personaje} />
      <Episode episodios={episodios} />
      <button>Home</button>
    </div>
  );
};

export default Character;