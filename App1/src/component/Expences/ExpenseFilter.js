import React from "react";

import "./ExpenseFilter.css";
import { useState } from "react";

const ExpenseFilter = (props) => {
  const handleFilterChange = (event) => {
    // Call the onFilterChange prop with the selected value
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control" onChange={handleFilterChange}>
        <label>Filter by year</label>
        <select value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
