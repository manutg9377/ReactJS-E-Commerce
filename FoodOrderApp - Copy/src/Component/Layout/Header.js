import { Fragment } from "react";
import mealsImage from "../../assets/Meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Headers = (props) => {
  return (
    <Fragment>
      <header>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Headers;
