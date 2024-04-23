import React,{useEffect,useState}  from "react";
import Card from "./Card";
/* Hecho por Natalia Lozano */
const Home = () => {
    const [characters, setCharacters]=useState([]);
 useEffect(() => {
    fetchRandomCharacters();
  }, []);

  const fetchRandomCharacters = () => {
    const randomIds = generateRandomIds(10, 826);
    const promises = randomIds.map((id) =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
        res.json()
      )
    );

    Promise.all(promises).then((data) => {
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
  );
};
export default Home;
