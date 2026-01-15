import { searchPokemonByName } from "./api.js";

// Get DOM elements
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
const resultDiv = document.getElementById('pokemon-result') as HTMLDivElement;

// Add event listener
searchBtn.addEventListener('click', async () =>{
    // Your code here:
  // 1. Get the input value
  const pokemonName = searchInput.value.trim();
    // validation: don't fetch if input is empty
    if(!pokemonName) return;
    resultDiv.innerHTML = `<p class="loading-text">Searching for ${pokemonName}...</p>`;
  // 2. Call searchPokemonByName (use try/catch!)
  try {
    const data = await searchPokemonByName(pokemonName);
    resultDiv.innerHTML = `
  <h2>${data.name}</h2>
  <img src="${data.sprites.front_default}" alt="${data.name}">
  <p>Height: ${data.height} dm</p>
  <p>Weight: ${data.weight} hg</p>
`;    
  }catch (error: unknown) {
    resultDiv.innerHTML = `<p style="color: red;">Pokemon not found. Please try again.</p>`;
    if (error instanceof Error) {
      console.error('Error message: ', error.message);
    } else {
      console.error('An unknown error occurred:', error);
  }
}
})