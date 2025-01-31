import { useState } from "react";
import Card from "./component/Card/Card";
import Expences from "./component/Expences/Expences";
import NewExpense from "./component/NewExpenses/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHadler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };
  return (
    <Card>
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHadler} />
        <Expences items={expenses} />
      </header>
    </Card>
  );
}

export default App;
