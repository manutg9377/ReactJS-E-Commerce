import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const [isCheckOut, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userdata) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-api-53684-default-rtdb.asia-southeast1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userdata,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const modelAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const cartModelContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <CheckOut onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckOut && modelAction}
    </React.Fragment>
  );

  const isSubmittingModelContent = <p>Sending Order Data</p>;
  const didiSubmitModelContent = <p>Succesfully Sent the Order!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModelContent}
      {isSubmitting && isSubmittingModelContent}
      {!isSubmitting && didSubmit && didiSubmitModelContent}
    </Modal>
  );
};

export default Cart;
