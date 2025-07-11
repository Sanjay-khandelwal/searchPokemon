import { Pokemon } from "./component/pokemon.jsx";
import { Pokemon2 } from "./component/sliding.jsx";
import { useEffect, useState } from "react";
import { fetchPokemonData } from "./api.js";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [value, setValue] = useState(12);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPokemonData(null, value)
      .then((data) => {
        setPokemon(data);
        console.log("Fetched Pokémon:", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [value]);

  // Filtered Pokémon by name
  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#ffffff4f] p-6 space-y-16">
      <header className="text-center mb-6">
        <h1 className="text-5xl font-bold text-gray-800">Pokémon Gallery</h1>
      </header>

      {/* Input to change number of Pokémon */}
      <div className="text-center mb-6 flex gap-4 justify-center items-center">
        <h2 className="text-green-800 text-3xl font-bold">
          Enter the number you need
        </h2>
        <input
          type="number"
          min="1"
          max="1000"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="border-2 border-gray-300 rounded-lg p-2 mt-2"
        />
      </div>

      {/* Pokémon Slider */}
      <section className="bg-white shadow-md rounded-3xl p-6">
        <div className="text-center mb-6">
          <p className="uppercase text-sm tracking-wider text-gray-500">
            Featured
          </p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
            Pokémon Slider
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Scroll to explore trending Pokémon
          </p>
        </div>
        {pokemon.length > 0 && (
          <Pokemon2
            pokemon={search.trim() ? filteredPokemon : pokemon}
          />
        )}
      </section>

      {/* Pokémon Grid Collection */}
      <section className="bg-white shadow-md rounded-3xl p-6">
        <div className="text-center mb-6">
          <p className="uppercase text-sm tracking-wider text-gray-500">
            Gallery
          </p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            Pokémon Collection
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Tap any Pokémon to view details
          </p>

          {/* Search Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search Pokémon by name"
              className="bg-gray-300 sm:w-[500px] md:w-[600px] h-10 p-4 text-center border-2 rounded-4xl focus:bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {pokemon.length > 0 && (
          <Pokemon
            pokemon={search.trim() ? filteredPokemon : pokemon}
          />
        )}
      </section>
    </div>
  );
}

export default App;
