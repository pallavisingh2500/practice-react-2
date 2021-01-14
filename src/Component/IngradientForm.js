import React, { useState } from "react";
//import Card from './Card';
import Search from "./Search";
import './IngradientForm.css';
const IngradientForm = React.memo(props => {
  const inputState = useState({ title: " ", amount: " " });
  const submitHandler = event => {
    event.preventDefault();
  };
  return (
    <section className="ingredient-form">
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlfor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState[0].title}
              onChange={event =>
                inputState[1](prevInputState => ({
                  title: event.target.value,
                  amount: prevInputState.amount
                }))
              }
            />
          </div>
          <div className="form-control">
            <label htmlfor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState[0].amount}
              onChange={event =>
                inputState[1](prevInputState => ({
                  amount: event.target.value,
                  title: prevInputState.title
                }))
              }
            />
          </div>
          <div className="ingredient-form_actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </div>
    </section>
  );
});
export default IngradientForm;
