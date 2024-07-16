import Header from "./Component/Layout/Header";
import { useState } from "react";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartShown, SetCartShown] = useState(false);

  const showCartunction = () => {
    SetCartShown(true);
  };

  const hideCartFunction = () => {
    SetCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCartFunction} />}
      <Header onShownCart={showCartunction} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
