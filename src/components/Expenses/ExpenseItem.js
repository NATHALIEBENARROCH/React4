import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* the useState value below does not just call a new function but also is updated again because of the STATE UPDATING FUNCTION ABOVE CALLED setTitle*/}
        <h2>{props.title}</h2>
        {/* //this below cannot be updated as does not useState */}
        {/* <h2>{props.title}</h2> */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>{title}</button>
    </Card>
  );
};

export default ExpenseItem;
