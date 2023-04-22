import React, { useState } from 'react';
import Calendar from './calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../../Navbars'
import RecipeList from '../Recipe/recipeList'
import SelectedRecipe from '../Recipe/selectedRecipe'
import MealPlanList from '../MealPlans/mealPlanList'

function Profile() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleOpenCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsCalendarOpen(false);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top"/>
      {/* My Profile*/}
      <button onClick={handleOpenCalendar}>Open Calendar</button>
      {isCalendarOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <Calendar />
            <button onClick={handleCloseCalendar}>Close Calendar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
