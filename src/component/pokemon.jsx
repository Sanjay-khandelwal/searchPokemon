import { PokemonCard } from "./component";
export const Pokemon = ({pokemon}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 shadow-lg gap-6 shadow-gray-300">
        <PokemonCard pokemon={pokemon} />
      </div>
    </div>
  );
};

