import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredText, SetEnteredText] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");
  // const [userInput, SetUserInput] = useState({
  //   enteredText: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    SetEnteredText(event.target.value);
    // SetUserInput({ ...userInput, enteredText: event.target.value });
    // SetUserInput((prevState)=>{return{...prevState,enteredText: event.target.value}});
  };

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value);
    // SetUserInput({ ...userInput, enteredAmount: event.target.value });
    // SetUserInput((prevState)=>{return{...prevState,enteredAmount: event.target.value}});
  };

  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
    // SetUserInput({ ...userInput, enteredDate: event.target.value });
    // SetUserInput((prevState)=>{return{...prevState,enteredDate: event.target.value}});
  };
  const submitHanler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredText,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    SetEnteredText("");
    SetEnteredAmount("");
    SetEnteredDate("");
  };

  return (
    <form onSubmit={submitHanler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredText}
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
}

export default ExpenseForm;
