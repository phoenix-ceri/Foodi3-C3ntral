import React from "react";
import Form from 'react-bootstrap/Form';

const DaysOfWeekDropdown = ({ value, onChange }) => {
  return (
    <div className="DropContainer">
    <h2 className="dayOfWeek">Day of the Week</h2>

    <Form.Select className="dropdown" value={value} onChange={onChange} aria-label="Default select example">
      <option>Day of the Week</option>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
      <option value="7">Sunday</option>
    </Form.Select>

  </div>

  );
};

export default DaysOfWeekDropdown;