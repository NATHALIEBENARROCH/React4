import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  //this function saveExpenseDataHandler  expects a parameter (enteredExpenseData)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //and returns an object our expenseData that was generated in the submitHandler in child component
    const expenseData = {
      //with spread operator I pull out all key value pairs and add the key id
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    console.log("start editing");
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    console.log("stop editing");
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
