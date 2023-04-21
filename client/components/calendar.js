jeff
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import addDays from "date-fns/addDays";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
// import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    addDays,
    locales,
});

const time = document.getElementsByClassName("time").value;
  document.getElementsByClassName("demo").innerHTML = time;

const schedules = [

    {
        title: "Meal Prep",
        start: new Date(2023, 4, 1, 7, 30),
        end: new Date(2023, 4, 1, 8, 30 ),
    },
    {
        title: "Cheat Day",
        allDay: true,
        start: new Date(2023, 4, 3),
        end: new Date(2023, 4, 4),
    },
    {
        title: "Meal Prep",
        start: new Date(2023, 4, 4),
        end: new Date(2023, 4, 6),
    },
    {
        title: "Cheat Day",
        allDay: true,
        start: new Date(2023, 4, 6),
        end: new Date(2023, 4, 8),
    },
];

function MyCalander() {
    const [newSchedule, setNewSchedule] = useState({ title: "", start: "", end: "" });
    const [allSchedules, setAllSchedules] = useState(schedules);

    function handleAddEvent() {
        
        for (let i=0; i<allSchedules.length; i++){

            const d1 = new Date (allSchedules[i].start);
            const d2 = new Date(newSchedule.start);
            const d3 = new Date(allSchedules[i].end);
            const d4 = new Date(newSchedule.end);

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
        }
        setAllSchedules([...allSchedules, newSchedule]);
    }

    // const [value, onChange] = useState('10:00');

    return (
        <div className="App">
            <h1>Calendar</h1>
            <h2>Add New Scheduled Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newSchedule.title} onChange={(e) => setNewSchedule({ ...newSchedule, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newSchedule.start} onChange={(start) => setNewSchedule({ ...newSchedule, start })} />
                <DatePicker placeholderText="End Date" selected={newSchedule.end} onChange={(end) => setNewSchedule({ ...newSchedule, end })}
                />
                {/* <input type="time" className="time" name="time" value="12:00" style={{padd: "20px"}} /> */}

                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Submit
                </button>
            </div>
            <Calendar localizer={localizer} events={allSchedules} className="demo" startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
}

export default MyCalander;
