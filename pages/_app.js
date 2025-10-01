import "../styles/globals.css";
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return <Component {...pageProps} cart={cart} addToCart={addToCart} />;
}
