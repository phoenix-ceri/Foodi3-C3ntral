import React from "react";
import Form from 'react-bootstrap/Form';

const MealTypeDropDown = ({ value, onChange }) => {
  return (

    <div >
     <h2 className="dayOfWeek">Meal Type</h2>
      <Form.Select className="dropdown" value={value} onChange={onChange} aria-label="Default select example">
        <option>Meal Type</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </Form.Select>
    </div>


  );
};

export default MealTypeDropDown;