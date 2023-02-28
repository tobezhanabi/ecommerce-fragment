import "./App.css";
import { GlobalStyles } from "./Global.styled";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [basketTotal, setBasketTotal] = useState(0);
  function addToCart(item, qty) {
    const arr = [...cartItems];
    if (isInBasket(item)) {
      const index = arr.indexOf(item);
      arr[index].qty = Number(arr[index].qty) + Number(qty);
      setCartItems(arr);
      setBasketTotal(Number(basketTotal) + item.currentPrice * qty);
      setItemCount(itemCount + qty);
    } else {
      item.qty = qty;
      arr.push(item);
      setCartItems(arr);
      setItemCount(itemCount + qty);
      setBasketTotal(Number(basketTotal) + Number(item.currentPrice) * qty);
    }
  }

  function removeCartitem(item, qty) {
    const arr = [...cartItems];
    const index = arr.indexOf(item);
    arr.splice(index, 1);
    setCartItems(itemCount - qty);
    setBasketTotal(
      Number(basketTotal) - Number(item.currentPrice) * Number(item.qty)
    );
  }
  const isInBasket = (item) => {
    const findItem = cartItems.filter((arrItem) => arrItem === item);
    if (findItem.length > 0) return true;
    else return false;
  };
  return (
    <>
      <GlobalStyles />
      <Navbar
        cartItems={cartItems}
        removeCartitem={removeCartitem}
        basketTotal={basketTotal}
      />
      <Hero
        cartItems={cartItems}
        addToCart={addToCart}
        basketTotal={basketTotal}
      />
    </>
  );
}

export default App;
