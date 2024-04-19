import React from "react";
import CharacterSection from "./CharacterSection";
import Episode from "./Episode";
import "./Character.css";
import { NavLink } from "react-router-dom";

const Character = ({ personaje, episodios }) => {
  return (
    <div className="personaje">
      <CharacterSection personaje={personaje} />
      <Episode episodios={episodios} />
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default Character;
