import React, { useState } from "react";

import "./ExpensesFilter.css";

// THIS IS A CONTROLLED COMPONENT AS LOGIC IS HANDLED IN PARENT COMPONENT EXPENSES

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    event.preventDefault();

    console.log("event:", event.target.value);
    //passes this data up to expenses
    props.onChangeFilter();
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Enter year</label>
        {/* //TWO WAY BINDING */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
