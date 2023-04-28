import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DaysOfWeekDropdown from "./dayOfTheWeek";
import MealTypeDropDown from  "./mealType";
import Modal from 'react-modal';
import './style.css'

const RecipeModal = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
  const [savedSelections, setSavedSelections] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };


  const handleMealTypeChange = (e) => {
    setSelectedMealType(e.target.value);
  };

 const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedDay && selectedMealType) {
      setSavedSelections([
        ...savedSelections,
        { day: selectedDay, mealType: selectedMealType },
      ]);
      setSelectedDay("");
      setSelectedMealType("");
    }
  };

  return (
    <div >
      {/* <div className="recipe">
        <h2>Hi My name is Jeff </h2>
        <p>I want a Cane Corso's but I currently own a Pit Bull that is about to turn 2 years old.</p>
        <p>He is super annoying but like they say you hate em to love them</p>
        <img src="https://www.dogbreedinfo.com/images26/SpencerPedigreePitbullTerrierLinesRazorEdgeWatchDogShadesBlueKennel2YearsOld.jpg" alt="Cane Corso"/>
      </div> */}
      <br/>

      <div className="text-center">
       <Button  variant="success" className="displayModal btn btn-primary" onClick={openModal}>Add Recipe to Calendar</Button>
       </div>
       <div className="Modal">
        <Modal isOpen={modalIsOpen}onRequestClose={closeModal} 
        contentLabel="Example Modal" >
          <Form onSubmit={handleFormSubmit}>
            <Row>
            <Col>
                <DaysOfWeekDropdown value={selectedDay} onChange={handleDayChange} />
            </Col>
            <Col>
              <MealTypeDropDown value={selectedMealType} onChange={handleMealTypeChange} />
            </Col>
            </Row>
            <br/>
            <br/>
            <div className="text-center">
            <Button className="modalBtn" type="submit" variant="primary">Complete Plan</Button>
            </div>
            <br/>
            <div className="text-center">
            <Button className="modalBtn" onClick={closeModal} variant="danger">Close</Button>
            </div>
          </Form>
        </Modal>
        </div>
   </div>
  );
};

export default RecipeModal;