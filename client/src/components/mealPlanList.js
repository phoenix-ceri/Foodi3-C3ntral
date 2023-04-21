jeff

import React from 'react';
import MealPlan from './';

const MealPlanList = ({ mealPlans, name }) => {
  if (!mealPlans.length) {
    return <h3>No Meal Plans Yet</h3>;
  }

  return (
    <div>
      <h3>{name}</h3>
      {mealPlans &&
        mealPlans.map((mealPlan) => (
          <div key={mealPlan._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {mealPlan.mealPlanUser} <br />
              <span style={{ fontSize: '1rem' }}>
                had this Meal Plan on {mealPlan.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{mealPlan.descrption}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MealPlanList;
