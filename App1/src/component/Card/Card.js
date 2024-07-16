import "./Card.css";

function Card(props) {
  const class_css = "Card" + " " + props.className;
  return <div className={class_css}>{props.children}</div>;
}

export default Card;
