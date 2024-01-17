const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center  ">
      <img src="public/images/pokelogo.png" alt="" className="w-[200px] mb-2" />
      <p className="text-xl md:text-2xl font-semibold">
        Click the cards to see more detail!
      </p>
    </div>
  );
};

export default Header;
