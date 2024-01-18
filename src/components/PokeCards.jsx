/* eslint-disable react/prop-types */
import Backgrounds from "../utils/Backgrounds";

const PokeCards = ({ name, id, image, height, weight, type, onClick }) => {
  return (
    <section
      className={`relative rounded-3xl bg-slate-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer mx-10 h-auto pt-5 border-4 hover:scale-110 transition ease-in-out duration-300`}
      style={{
        background: `linear-gradient(${Backgrounds[type]}, #fff)`,
        borderColor: `${Backgrounds[type]}`,
      }}
      onClick={onClick}
    >
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="pokemon"
          className="w-[150px] h-[150px] mt-7 z-50 "
        />
      </div>

      <p className="text-6xl font-extrabold absolute top-0 right-3 opacity-50">
        #0{id}
      </p>
      <p className=" ml-5 text-start font-bold text-xl md:ml-8 lg:text-center lg:ml-0 mt-2">
        {name}
      </p>

      <div className="flex justify-around my-3">
        <p>Weight: {weight}</p> <p>Height: {height}</p>
      </div>
    </section>
  );
};

export default PokeCards;
