import {PokemonCard} from './component.jsx'
export const Pokemon2 = ({pokemon}) => {
  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 py-4 px-1 w-max">
          <PokemonCard pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};
