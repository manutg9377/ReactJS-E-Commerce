import classes from "./Cart.module.css";
import Model from "../UI/Model";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartContex from "../../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContex);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItemAddHandler = (item) => { 
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemValue = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItemVar) => (
        <CartItem
          key={cartItemVar.id}
          name={cartItemVar.name}
          amount={cartItemVar.amount}
          price={cartItemVar.price}
          onRemove={cartItemRemoveHandler.bind(null, cartItemVar.id)}
          onAdd={cartItemAddHandler.bind(null, cartItemVar)}
        />
      ))}
    </ul>
  );
  return (
    <Model onClose={props.onHideCart}>
      {cartItemValue}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  );
};

export default Cart;
