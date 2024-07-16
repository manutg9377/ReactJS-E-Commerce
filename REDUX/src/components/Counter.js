import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementHandlerOfFive = () => {
    dispatch(counterActions.incrementOfFive(10));
  };

  const decreementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerOfFive}>Increment by 5</button>
        <button onClick={decreementHandler}>decreement</button>
      </div>
    </main>
  );
};

export default Counter;
