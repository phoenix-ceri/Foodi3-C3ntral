import React, { useState } from 'react';
import axios from 'axios';
import "./app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons';
const REACT_APP_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const element = <FontAwesomeIcon icon={faDice} size="2xl" style={{color: "#ffffff",}} />

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const search = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&query=${query}`
    );
    setRecipes(response.data.results);
  };

  const getRandomRecipes = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=9`
    );
    setRecipes(response.data.recipes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleRandomClick = () => {
    getRandomRecipes();
    setQuery('');
  };

  return (
    <div className="container">
      <h1>Recipe Search</h1>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="text"
            placeholder="Search for recipes..."
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      <button className="random" onClick={handleRandomClick}>
      {element}
      </button>
      <div className="recipes">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
