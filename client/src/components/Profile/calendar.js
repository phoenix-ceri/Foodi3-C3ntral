import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MealPlanCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mealPlan, setMealPlan] = useState([]);

  const [mealType, setMealType] = useState('Breakfast');
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');

  const handleAddMeal = () => {
    const newMeal = {
      date: selectedDate,
      type: mealType,
      name: mealName,
      description: mealDescription,
    };
    setMealPlan([...mealPlan, newMeal]);
  };

  return (
    <div>
      <Calendar value={selectedDate} onChange={setSelectedDate} />
      <form onSubmit={handleAddMeal}>
        <label>
          Meal Type:
          <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </label>
        <label>
          Meal Name:
          <input type="text" value={mealName} onChange={(e) => setMealName(e.target.value)} />
        </label>
        <label>
          Meal Description:
          <input type="text" value={mealDescription} onChange={(e) => setMealDescription(e.target.value)} />
        </label>
        <button type="submit">Add Meal</button>
      </form>
    </div>
  );
}

export default MealPlanCalendar;
