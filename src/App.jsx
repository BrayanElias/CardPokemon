import { useState, useEffect } from "react";
import { IconArrowBigLeftFilled, IconArrowBigRightFilled } from "@tabler/icons-react";
import Button from "./components/Button";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");

  const prevClick = () => {
    setPokemonId((prevId) => (prevId === 1 ? 1 : prevId - 1));
  };

  const nextClick = () => {
    setPokemonId((prevId) => prevId + 1);
  };

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => {
        setPokemonName(res.data.name);
        setPokemonImage(res.data.sprites.other["official-artwork"].front_default);
      });
  }, [pokemonId]);

  return (
    <div className="flex flex-col items-center mt-28">
      <div>
        <Card pokemonName={pokemonName} pokemonImage={pokemonImage} />
      </div>
      {/* CONTENEDOR BOTONES */}
      <div className="w-80 flex justify-between mt-4 text-2xl items-center">
        <Button icon={<IconArrowBigLeftFilled />} handleClick={prevClick} />
        {pokemonName.toUpperCase()}
        <Button icon={<IconArrowBigRightFilled />} handleClick={nextClick} />
      </div>
    </div>
  );
}

export default App;
