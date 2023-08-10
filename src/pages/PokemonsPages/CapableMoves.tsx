import React from "react";
import { useAppSelector } from "../../app/hooks";

const CapableMoves = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );

  return (
    <div className="capable-moves">
      <h1 className="capable-moves-title">Abilities</h1>
      <ul className="capable-moves-list ability">
        {pokemonData?.pokemonAbilities.abilities.map((ability: string) => (
          <li key={ability} className="move">
            {ability}
          </li>
        ))}
      </ul>

      <h1 className="capable-moves-title">Moves</h1>
      <ul className="capable-moves-list">
        {pokemonData?.pokemonAbilities.moves.map((move: string) => (
          <li key={move} className="move">
            {move}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CapableMoves;
