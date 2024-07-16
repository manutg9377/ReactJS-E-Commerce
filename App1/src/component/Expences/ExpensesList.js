import ExpenceItem from "./ExpenceItem";

const ExpensesList = (props) => {
  if (props.itemsExpensesList === 1) {
    return props.items.map((itemover) => {
      if (itemover.date.getFullYear().toString() === props.filteredYearList) {
        return (
          <ExpenceItem
            key={itemover.id}
            title={itemover.title}
            amount={itemover.amount}
            date={itemover.date}
          />
        );
      } else {
        return null; // Important to include a return for non-matching items
      }
    });
  } else {
    return (
      <div>
        {" "}
        <h2>No expense found</h2>
      </div>
    );
  }
};

export default ExpensesList;
