import { searchPokemonByName } from "./api.js";
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('pokemon-result');
// Helper function to get type colors
function getTypeColor(type) {
    const colors = {
        normal: 'bg-gray-400',
        fire: 'bg-red-500',
        water: 'bg-blue-500',
        electric: 'bg-yellow-400',
        grass: 'bg-green-500',
        ice: 'bg-blue-300',
        fighting: 'bg-red-700',
        poison: 'bg-purple-500',
        ground: 'bg-yellow-700',
        flying: 'bg-indigo-400',
        psychic: 'bg-pink-500',
        bug: 'bg-green-600',
        rock: 'bg-yellow-800',
        ghost: 'bg-purple-700',
        dragon: 'bg-indigo-700',
        dark: 'bg-gray-800',
        steel: 'bg-gray-500',
        fairy: 'bg-pink-400'
    };
    return colors[type] || 'bg-gray-400';
}
// Helper function to capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
searchBtn.addEventListener('click', async () => {
    const pokemonName = searchInput.value.trim();
    if (!pokemonName)
        return;
    resultDiv.innerHTML = `<p class="text-center text-gray-600 py-8">Searching for ${pokemonName}...</p>`;
    try {
        const pokemon = await searchPokemonByName(pokemonName);
        // Create type badges
        const typeBadges = pokemon.types
            .map(t => `<span class="${getTypeColor(t.type.name)} text-white px-3 py-1 rounded-full text-sm font-bold uppercase">${t.type.name}</span>`)
            .join(' ');
        // Create stats display
        const statsHTML = pokemon.stats
            .map(s => {
            const statName = capitalize(s.stat.name.replace('-', ' '));
            const percentage = (s.base_stat / 255) * 100;
            return `
                    <div class="mb-3">
                        <div class="flex justify-between mb-1">
                            <span class="text-sm font-medium text-gray-700">${statName}</span>
                            <span class="text-sm font-bold text-purple-600">${s.base_stat}</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-purple-600 h-2 rounded-full" style="width: ${percentage}%"></div>
                        </div>
                    </div>
                `;
        })
            .join('');
        resultDiv.innerHTML = `
            <div class="flex flex-col items-center">
                <!-- Pokemon Image -->
                <div class="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full p-8 mb-4">
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="w-48 h-48">
                </div>
                
                <!-- Pokemon Name & ID -->
                <h2 class="text-3xl font-bold text-gray-800 capitalize mb-2">${pokemon.name}</h2>
                <p class="text-gray-500 mb-4">#${pokemon.id.toString().padStart(3, '0')}</p>
                
                <!-- Type Badges -->
                <div class="flex gap-2 mb-6">
                    ${typeBadges}
                </div>
                
                <!-- Physical Stats -->
                <div class="grid grid-cols-2 gap-4 mb-6 w-full max-w-md">
                    <div class="bg-gray-100 p-4 rounded-lg text-center">
                        <p class="text-gray-600 text-sm">Height</p>
                        <p class="text-2xl font-bold text-gray-800">${pokemon.height / 10}m</p>
                    </div>
                    <div class="bg-gray-100 p-4 rounded-lg text-center">
                        <p class="text-gray-600 text-sm">Weight</p>
                        <p class="text-2xl font-bold text-gray-800">${pokemon.weight / 10}kg</p>
                    </div>
                </div>
                
                <!-- Stats -->
                <div class="w-full max-w-md">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Base Stats</h3>
                    ${statsHTML}
                </div>
                
                <!-- Add to Team Button (we'll make this work later) -->
                <button class="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105">
                    ➕ Add to Team
                </button>
            </div>
        `;
    }
    catch (error) {
        resultDiv.innerHTML = `
            <div class="text-center py-8">
                <p class="text-red-500 text-xl font-bold mb-2">❌ Pokémon not found</p>
                <p class="text-gray-600">Try searching for another Pokémon!</p>
            </div>
        `;
        if (error instanceof Error) {
            console.error('Error:', error.message);
        }
    }
});
// Allow Enter key to search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});
