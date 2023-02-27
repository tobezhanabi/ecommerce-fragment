import "./App.css";
import { GlobalStyles } from "./Global.styled";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function removeCartitem(item) {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  }
  return (
    <>
      <GlobalStyles />
      <Navbar cartItems={cartItems} removeCartitem={removeCartitem} />
      <Hero cartItems={cartItems} />
    </>
  );
}

export default App;
