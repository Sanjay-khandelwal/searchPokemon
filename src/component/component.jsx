export const PokemonCard = ({ pokemon }) => {
  return (
    <>
      {pokemon.map((pokemon) => {
        return (
          <div
            key={pokemon.id}
            className="group bg-white rounded-2xl shadow-md sm:min-w-[120px] md:min-w-[200px] p-4 flex flex-col items-center transition-transform duration-300 hover:shadow-gray-900 hover:shadow-lg hover:scale-105"
          >
            <div className="w-20 h-20 mb-3">
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h2 className="text-gray-800 font-semibold capitalize text-base group-hover:text-indigo-600">
              {pokemon.name.toUpperCase()}
            </h2>
            <button className="px-4 py-1 rounded-full bg-green-500 text-white text-sm font-semibold shadow hover:bg-white hover:text-green-500 border border-green-500 transition duration-300 ease-in-out">
              {pokemon.types.map((type) => type.type.name).join(", ")}
            </button>

            <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-gray-700 text-center">
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium">Height</span>
                <span className="font-semibold">{pokemon.height / 10} m</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium">Weight</span>
                <span className="font-semibold">{pokemon.weight / 10} kg</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium">Speed</span>
                <span className="font-semibold">
                  {pokemon.stats[5].base_stat} km/h
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700 text-center">
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium">Experience</span>
                <span className="font-semibold">{pokemon.base_experience} XP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium">Attack</span>
                <span className="font-semibold">{pokemon.stats[1].base_stat} </span>
              </div>
              
            </div>
            <div className="flex flex-col mt-4 text-sm text-gray-700 text-center">
                <span className="text-gray-400 font-medium">Abilities</span>
                <span className="font-semibold">
                  {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
                </span>
              </div>
          </div>
        );
      })}
    </>
  );
};
