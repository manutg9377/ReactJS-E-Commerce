import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../Card/Card.js";

function ExpenceItem(props) {
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenceItem;
