import React from 'react';
import UserDetails from './UserDetails';
import ButtonSection from './ButtonSection';
import "./Card.css";

const Card = (props) => { 
  const user = props.user;
  console.log(user);
  return (
    <div className="contenedor">
        <UserDetails user={user}/>
        <ButtonSection/>
    </div>
  );
};

export default Card;