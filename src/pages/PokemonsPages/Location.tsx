import { useAppSelector } from "../../app/hooks";

const Location = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );

  return (
    <div className="pokemon-locations">
      <ul className="pokemon-location-list">
        {pokemonData?.encounters.map((encounter: string) => (
          <li key={encounter} className="pokemon-location">
            {encounter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
