import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //this function saveExpenseDataHandler  expects a parameter (enteredExpenseData)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //and returns an object our expenseData that was generated in the submitHandler in child component
    const expenseDataTwo = {
      //with spread operator I pull out all key value pairs and add the key id
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseDataTwo);

    props.onAddExpense(expenseDataTwo);
  };
  return (
    <div className="new-expense">
      {/* //we pass a function to this component.A function to be triggered when something happens in that component below. In this case when user saves data in component below. This function is pointed to but does NOT RUNE HERE. No () at the end*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
