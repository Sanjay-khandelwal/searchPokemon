const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function fetchPokemonData(pokemonName,limit) {
  try {
    
      const url=`${API_URL}?limit=${limit}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const allData = data.results.map(async (currPokemon)=>{
      let res = await fetch(currPokemon.url);
      res = await res.json();
      return res;
    })
    const myData = await Promise.all(allData);
    return myData
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
}

