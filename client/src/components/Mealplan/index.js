import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import './index.css';

const API_KEY = process.env.SPOONACULAR_API_KEY;

const CalendarForm = () => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const meals = ['Breakfast', 'Lunch', 'Dinner'];

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = async (day, meal) => {
    const searchResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${day} ${meal}`);
    const { results } = await searchResponse.json();
    const recipeDetailsResponse = await fetch(`https://api.spoonacular.com/recipes/${results[0].id}/information?apiKey=${API_KEY}`);
    const recipeDetails = await recipeDetailsResponse.json();
    setSelectedRecipe({ day, meal, recipe: recipeDetails });
  };

  return (
    <>
      <Form>
        <div className="calendar-container">
          {weekdays.map((day) => (
            <div key={day} className="day-container">
              <h4>{day}</h4>
              {meals.map((meal) => (
                <div
                  key={`${day}-${meal}`}
                  className="meal-container"
                  onClick={() => handleRecipeSelect(day, meal)}
                >
                  <Form.Label>{meal}</Form.Label>
                  <div className="recipe-info">
                    {selectedRecipe?.day === day && selectedRecipe?.meal === meal ? (
                      <>
                        <div className="recipe-title">{selectedRecipe.recipe.title}</div>
                        <img src={selectedRecipe.recipe.image} alt={selectedRecipe.recipe.title} className="recipe-image" />
                        <div className="recipe-instructions">
                          <h5>Instructions:</h5>
                          <ul>
                            {selectedRecipe.recipe.analyzedInstructions[0].steps.map((step) => (
                              <li key={step.number}>{step.step}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <div className="no-recipe">No recipe selected</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Form>
    </>
  );
};

export default CalendarForm;
