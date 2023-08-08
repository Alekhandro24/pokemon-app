import React, { useEffect } from "react";
import Wrapper from "../sections/Wrapper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Login from "../components/Login/Login";
import PokemonCardGrid from "../components/PokemonCardGrid/PokemonCardGrid";
import { getUserPokemons } from "../app/reducers/getUserPokemons";

const MyList = () => {
  const { userInfo } = useAppSelector(({ app }) => app);
  const { userPokemons } = useAppSelector(({ pokemon }) => pokemon);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserPokemons());
  }, [userInfo, dispatch]);

  useEffect(() => {
    dispatch(getUserPokemons());
  }, [userInfo, dispatch]);

  return (
    <div className="list">
      {userInfo ? <PokemonCardGrid pokemons={userPokemons} /> : <Login />}
    </div>
  );
};

export default Wrapper(MyList);
