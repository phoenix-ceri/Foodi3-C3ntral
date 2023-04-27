import React, { useState } from 'react';
import axios from 'axios';
import "./recipeSearch.scss";
import { useMutation } from '@apollo/client';
import { ADD_RECIPE, ADD_RECIPE_DETAILS } from "../../utils/mutations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons';
const REACT_APP_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const element = <FontAwesomeIcon icon={faDice} size="2xl" style={{ color: "#ffffff", }} />

const Search = () => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [addRecipe] = useMutation(ADD_RECIPE);
    const [addRecipeDetails] = useMutation(ADD_RECIPE_DETAILS);

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

    //saving the recipe, identifier will change depending on whether id or name(title)
    const handleRecipeClick = async (e) => {
        const identifier = e.target.textContent;
        const recipeToSave = recipes.find(recipe => {
            return recipe.title === identifier
        })
        try {
            console.log(recipeToSave);
            const { data } = await addRecipeDetails({
                variables: {
                    //if recipeToSave doesn't match the rest of the code, go manually one by one to fix them
                    ...recipeToSave
                }
            })
            console.log(data)
            //addRecipe and save the ID that you get from {data} to the recipe and whatever other information it needs, needs to link to user/mealplan. 
            // Combining recipedetails/recipe and adding the rating to the combined model. Just move the rating from the recipe model to the recipedetails model (could cut out an extra step)
        } catch (err) {
            console.log(err);
        }
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

export default Search;
