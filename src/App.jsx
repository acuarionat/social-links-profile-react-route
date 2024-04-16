import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
      setCharacters(data);
      const randomCharacters = getRandomCharacters(data.results, 10);
        setCharacters(randomCharacters);
      });
  }, []);


  const getRandomCharacters = (charactersArray, count) => {
  const shuffledCharacters = charactersArray.sort(() => 0.5 - Math.random());
    return shuffledCharacters.slice(0, count);
  };

  return (
    <>
      {characters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </>
  );
}

export default App;
