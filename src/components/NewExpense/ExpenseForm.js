import React, { useState } from "react";

import "./ExpenseForm.css";

//*****hHERE USESTATE HELPS US STORE THE INPUT
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // VERSION 2 IN EACH FUNCTION CALL THE SAME USESTATE
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log("event:", event.target.value);

    //VERSION 2 IN EACH FUNCTION CALL THE SAME USESTATE AND USE SPREAD OP TO GET OTHER VALUES!!!
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //VERSION 3 with this version PREVIOUS STATE IS GUARANTEED SO USE THIS IF YOU DEPEND ON PREV STATE
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //VERSION2 IN EACH FUNCTION CALL THE SAME USESTATE
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    //SO IT WONT RELOAD AND SEND REQUEST TO BROWSER BUT WILL MANUALLY COLLECT
    event.preventDefault();
    //GET THE EXPENSE DATA OBJECT WHEN FORM IS SUBMITTED
    //but we need this object to travel up TO PARENT
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      //use built in date constructor to enter new date object
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    // functions are just objects
    //n HERE trigger a function defined in a parent component from inside a child component.
    props.onSaveExpenseData(expenseData);

    //set INPUT FIELDS BACK TO EMPTY STRINGS
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    //PASSING A POINTER TO A FUNCTION
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            //So react basically sees that we set a value on this onchange prop and adds that listener on the rendered input element.

            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
