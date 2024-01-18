/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokemonContext = createContext(undefined);

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setNextPageUrl(res.data.next);

      const pokemonPromises = res.data.results.map((pokemon) => {
        return axios.get(pokemon.url).then((res) => res.data);
      });

      Promise.all(pokemonPromises).then((pokemonData) => {
        setPokemons(pokemonData);
        setLoading(false);
      });
    });
  }, [currentPageUrl]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        nextPageUrl,
        setNextPageUrl,
        loading,
        setLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
