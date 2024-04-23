import React from "react";
import UserDetails from "./UserDetails";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ character }) => {
/*   console.log(character);
 */  return (
    <NavLink className="nav-link" to={`/character?id=${character.id}`} >
      <div className="total">
        <div className="contenedor">
          <UserDetails character={character} />
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
