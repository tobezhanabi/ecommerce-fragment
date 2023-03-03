import "./App.css";
import { GlobalStyles } from "./Global.styled";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import { useState } from "react";
import { useCart } from "react-use-cart";
import { Product } from "./data/ProductItem.jsx";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <GlobalStyles />
        <Navbar />;
        {Product.map((item, index) => {
          return (
            <Hero
              title={item.title}
              desc={item.desc}
              price={item.price}
              discount={item.discount}
              originalPrice={item.originalPrice}
              image={item.image}
              name={item.name}
              key={index}
              item={item}
            />
          );
        })}
      </CartProvider>
    </>
  );
}

export default App;
