import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonData } from "../app/reducers/getPokemonData";
import { setToast } from "../app/slices/AppSlice";
import PokemonCardGrid from "../components/PokemonCardGrid/PokemonCardGrid";
import Wrapper from "../sections/Wrapper";
import { debounce } from "../utils/Debounce";

const Search = () => {
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  const handleChange = debounce((value: string) => getPokemon(value), 1000);

  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      if (!pokemons || !pokemons.length) {
        dispatch(setToast(`There is no pokemons with such name.`));
      }
      dispatch(getPokemonData(pokemons!));
    } else {
      const clonedPokemons = [...(allPokemon as [])];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="pokemon-searchbar"
          placeholder="Search Pokemon"
          onChange={(e) => handleChange(e.target.value)}
        />
        {!randomPokemons ? (
          "Pending"
        ) : (
          <PokemonCardGrid pokemons={randomPokemons!} />
        )}
      </div>
      ;
    </>
  );
};

export default Wrapper(Search);
