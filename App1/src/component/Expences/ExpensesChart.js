import React from "react";
import Chart from "../Chart/Chart.js";

const ExpensesCart = (props) => {
  const monthIndexMap = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const chartDataPoints = [
    { label: "January", value: 0 },
    { label: "February", value: 0 },
    { label: "March", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "August", value: 0 },
    { label: "September", value: 0 },
    { label: "October", value: 0 },
    { label: "November", value: 0 },
    { label: "December", value: 0 },
  ];

  for (const expense of props.expenses) {
    const parts = expense.split("-");
    const expenseMonth = parts[0]; // "August"
    const expenseValue = parseFloat(parts[1]);

    const monthIndex = monthIndexMap[expenseMonth];
    if (monthIndex !== undefined) {
      chartDataPoints[monthIndex].value += expenseValue;
    }
  }
  console.log(chartDataPoints);
  return <Chart datapoints={chartDataPoints} />;
};

export default ExpensesCart;
