import React from "react";
import { useAppSelector } from "../../app/hooks";
import PokemonContainer from "../../components/PokemonContainer/PokemonContainer";
import Info from "../../components/Info/Info";

const Description = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <>
      {pokemonData && (
        <>
          <Info data={pokemonData} />
          <PokemonContainer image={pokemonData?.image!} />
        </>
      )}
    </>
  );
};

export default Description;
