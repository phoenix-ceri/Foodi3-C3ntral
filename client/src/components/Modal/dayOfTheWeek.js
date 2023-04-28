import React from "react";
import Form from 'react-bootstrap/Form';

const DaysOfWeekDropdown = ({ value, onChange }) => {
  return (
    <div className="drop-container">
      <h2 className="day-of-week">Day of the Week</h2>

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

      <style jsx>{`
        .drop-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1rem;
        }

        .day-of-week {
          margin: 0.5rem 0;
        }

        .dropdown {
          width: 100%;
        }

        @media (min-width: 768px) {
          .drop-container {
            flex-direction: row;
            justify-content: space-between;
          }

          .dropdown {
            width: 48%;
          }

          .day-of-week {
            margin: 0;
            width: 48%;
          }
        }
      `}</style>
    </div>
  );
};

export default DaysOfWeekDropdown;
