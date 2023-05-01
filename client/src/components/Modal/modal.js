import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TO_MEALPLAN } from "../../utils/mutations";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DaysOfWeekDropdown from "./dayOfTheWeek";
import MealTypeDropDown from "./mealType";
import Modal from 'react-modal';
import './style.css'

const RecipeModal = ({ recipeCard, setRecipeCard }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
  const [savedSelections, setSavedSelections] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [addToMealPlan, { error }] = useMutation(ADD_TO_MEALPLAN);
  //import and create add_recipe mutation (similar to add_to_mealplan)
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
      console.log(recipeCard)
      //do add_recipe mutation and replace the recipe with the recipe._id that we're getting
      console.log({ recipe: recipeCard.id, slot: selectedDay, position: selectedMealType })
      const { data } = addToMealPlan({
        variables: { recipe: JSON.stringify(recipeCard), slot: parseInt(selectedDay), position: selectedMealType }
      })
      setSelectedDay("");
      setSelectedMealType("");
    }
  };

  return (
    <div >
      <br />

      <div className="text-center">
        <Button variant="success" className="displayModal btn btn-primary" onClick={openModal}>Add Recipe to Calendar</Button>
      </div>
      <div className="Modal">
        <Modal className={'modal-overlay'} isOpen={modalIsOpen} onRequestClose={closeModal}
          contentLabel="Example Modal" >
          <Form className="modal-content" onSubmit={handleFormSubmit}>
            <Row>
              <Col>
                <DaysOfWeekDropdown value={selectedDay} onChange={handleDayChange} />
              </Col>
              <Col className="mover">
                <MealTypeDropDown value={selectedMealType} onChange={handleMealTypeChange} />
              </Col>
            </Row>
            <br />
            <br />
            <div className="text-center">
              <Button className="modalBtn" type="submit" variant="primary">Add to Plan</Button>
            </div>
            <br />
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