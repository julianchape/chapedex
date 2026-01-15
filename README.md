# ⚡ Pokémon Search App

A web application that allows users to search for any Pokémon by name and view their details. Built to practice TypeScript, async/await patterns, and API integration.

## 🚀 Live Demo
[Link to your GitHub Pages site goes here]

## 🛠️ Built With
* **TypeScript** - For type safety and modern JavaScript features.
* **PokéAPI** - The RESTful API used to fetch Pokémon data.
* **HTML/CSS** - For the user interface.

## ✨ Features
* **Search Functionality:** Users can input a Pokémon name (e.g., "Pikachu" or "Charizard") to retrieve data.
* **Data Display:** Shows the Pokémon's name and front sprite image.
* **Error Handling:** gracefully handles 404 errors (if a Pokémon isn't found) and network issues.
* **Input Sanitization:** Automatically trims whitespace from search inputs to prevent API errors.
* **Type Safety:** Uses custom Interfaces (`Pokemon`, `TeamPokemon`) to ensure data consistency.

## 💻 How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/pokemon-search.git](https://github.com/YOUR_USERNAME/pokemon-search.git)
    ```
2.  **Compile the TypeScript**
    ```bash
    npx tsc
    ```
3.  **Open index.html**
    Open `index.html` in your browser (or use Live Server in VS Code).

## 📂 Project Structure
* `src/api.ts` - Handles fetching data from the API.
* `src/main.ts` - Manages DOM manipulation and event listeners.
* `src/types.ts` - Defines TypeScript interfaces.
