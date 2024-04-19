import React, { useEffect, useState } from "react";
import "./App.css";
import Character from "./components/Character";
import Episode from "./components/Episode";

function App() {
  const [personaje, setPersonaje] = useState([]);
  const [episodios, setEpisodio] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((res) => res.json())
      .then((data) => {
        setPersonaje(data);
        console.log(data);
        fetchEpisodes(data.episode.slice(0, 4));
      });
  }, []);

  const fetchEpisodes = (episodesUrls) => {
    const promises = episodesUrls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(promises)
      .then((episodios) => {
        setEpisodio(episodios);
        console.log(episodios);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {personaje && (
        <Character
          key={personaje.id}
          personaje={personaje}
          episodios={episodios}
        />
      )}
    </>
  );
}

export default App;

/*  useEffect(() => {
    fetchRandomCharacters();
  }, []);

  const fetchRandomCharacters = () => {
    const randomIds = generateRandomIds(10, 826);
    const promises = randomIds.map(id =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
    );

    Promise.all(promises)
      .then(data => {
        setCharacters(data);
      });
  };

  const generateRandomIds = (count, maxId) => {
    const ids = [];
    while (ids.length < count) {
      const randomId = Math.floor(Math.random() * (maxId + 1));
      if (!ids.includes(randomId)) {
        ids.push(randomId);
      }
    }
    return ids;
  };

  return (
    <>
      {characters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </>
  ); */
