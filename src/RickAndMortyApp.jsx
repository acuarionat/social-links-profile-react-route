import React, { useEffect, useState } from "react";
import Character from "./components/Character";

function RickAndMortyApp() {
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

export default RickAndMortyApp;

