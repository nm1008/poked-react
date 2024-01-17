import { useState, useEffect } from "react";
import axios from "axios";
import PokeCards from "../assets/components/PokeCards";
import PokemonModal from "../assets/components/PokemonModal";
import BASE_IMG_URL from "../utils/constants";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../assets/components/Loader";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [hasMore, setHasMore] = useState(true);

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

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  const fetchMoreData = () => {
    if (nextPageUrl) {
      axios.get(nextPageUrl).then((res) => {
        setNextPageUrl(res.data.next);

        const pokemonPromises = res.data.results.map((pokemon) => {
          return axios.get(pokemon.url).then((res) => res.data);
        });

        Promise.all(pokemonPromises).then((pokemonData) => {
          setPokemons((prevPokemons) => [...prevPokemons, ...pokemonData]);
          setLoading(false);
        });
      });
    } else {
      setHasMore(false);
    }
  };

  if (loading && pokemons.length === 0) {
    return <Loader />;
  }

  return (
    <section className="container mx-auto pt-20 relative">
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
          {pokemons.map((p) => {
            const pokemonCapitalized =
              p.name.charAt(0).toUpperCase() + p.name.slice(1);
            return (
              <PokeCards
                name={pokemonCapitalized}
                id={p.id}
                key={p.name}
                image={`${BASE_IMG_URL}${p.id}.svg`}
                height={p.height}
                weight={p.weight}
                type={p.types[0]?.type?.name}
                onClick={() => handleCardClick(p)}
              />
            );
          })}
        </div>
      </InfiniteScroll>

      <PokemonModal
        isOpen={selectedPokemon !== null}
        onClose={closeModal}
        pokemon={selectedPokemon}
      />
    </section>
  );
};

export default Home;
