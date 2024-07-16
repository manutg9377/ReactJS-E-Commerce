import Card from "../Card/Card.js";
import ExpenceItem from "./ExpenceItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";
import ExpensesCart from "./ExpensesChart.js";

function Expences(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.map((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const monthsAmount = props.items.map((expense) => {
    const month = expense.date.toLocaleString("en-us", { month: "long" });
    const amount = expense.amount;
    let ExpensechartVar = month + "-" + amount;
    return ExpensechartVar;
  });

  let indexOfTrueLoop = 0;
  for (let i = 0; i < filteredExpenses.length; i++) {
    if (filteredExpenses[i] === true) {
      indexOfTrueLoop = 1;
      break;
    }
  }

  return (
    <Card className="App">
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={handleFilterChange}
      />
      <ExpensesCart expenses={monthsAmount} />
      <ExpensesList
        itemsExpensesList={indexOfTrueLoop}
        filteredYearList={filteredYear}
        items={props.items}
      />
    </Card>
  );
}

export default Expences;
