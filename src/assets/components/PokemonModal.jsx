/* eslint-disable react/prop-types */

import Backgrounds from "../../utils/Backgrounds";
import BASE_IMG_URL from "../../utils/constants";

const PokemonModal = ({ isOpen, onClose, pokemon }) => {
  if (!isOpen) {
    return null;
  }

  const pokemonName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="modal-overlay fixed inset-0 bg-black opacity-75 "
        onClick={onClose}
      ></div>
      <div
        className="modal-content rounded-lg shadow-lg z-10 w-[90%] md:w-[50%] lg:w-[40%] py-5 relative"
        style={{
          background: `linear-gradient(${
            Backgrounds[pokemon.types[0]?.type?.name]
          }, #fff)`,
        }}
      >
        <h2 className=" text-xl font-bold mb-5 text-center">{pokemonName}</h2>
        <div className="flex justify-center ">
          <img
            src={`${BASE_IMG_URL}${pokemon.id}.svg`}
            alt={pokemon.name}
            className="w-[190px] my-2"
          />
        </div>
        <div className="flex justify-evenly md:justify-evenly flex-wrap">
          <div className="left">
            <h1 className="font-bold text-lg">Information</h1>
            <div className="w-28 h-1 bg-slate-900" />

            <table className="my-3">
              <tbody className="w-30 flex flex-col justify-center items-start">
                <tr className="flex">
                  <td className="font-bold mr-2">HP: </td>{" "}
                  <span> {pokemon.stats[0].base_stat}</span>
                </tr>
                <tr  className="flex">
                  <td className="font-bold mr-2">Attack:</td>{" "}
                  <span> {pokemon.stats[1].base_stat} </span>
                </tr>
                <tr  className="flex">
                  <td className="font-bold mr-2">Defense:</td>{" "}
                  <span> {pokemon.stats[2].base_stat}</span>
                </tr>
                <tr  className="flex">
                  <td className="font-bold mr-2">Special Attack:</td>{" "}
                  <span> {pokemon.stats[3].base_stat}</span>
                </tr>
                <tr  className="flex">
                  <td className="font-bold mr-2"> Special Defense:</td>{" "}
                  <span> {pokemon.stats[4].base_stat}</span>
                </tr>
                <tr  className="flex">
                  <td className="font-bold mr-2">Speed:</td>{" "}
                  <span> {pokemon.stats[5].base_stat}</span>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right flex items-center justify-center flex-col ">
            <h1 className="font-bold text-lg text-center">Type</h1>
            <div className="w-10 h-1 bg-slate-900 mb-3 " />
            {pokemon.types?.map((type, i) => {
              const capitalizedType = type.type.name.toUpperCase();
              return (
                <div
                  key={i}
                  className={`text-center rounded-2xl text-white md:text-lg font-semibold p-2 mb-2`}
                  style={{ background: `${Backgrounds[type.type.name]}` }}
                >
                  {capitalizedType}
                </div>
              );
            })}
            <h1 className="font-bold text-lg mt-5">Moveset</h1>
            <div className="w-20 h-1 bg-slate-900" />
            {pokemon.abilities.map((ability, i) => {
              const capitalizedAbility = ability.ability.name.toUpperCase();
              return <div key={i}>{capitalizedAbility}</div>;
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            name="Close"
            className="px-3 py-1 rounded-xl font-bold text-white text-xl bg-blue-600  absolute top-2 right-3"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
