// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const Greeting = (Props) => {
  const { firstName, lastName, city } = Props;
  return (
    <p>
      Hello {firstName} {lastName}! How is it living in {city}?
    </p>
  );
};

const Product = (Props) => {
  const { productTitle } = Props;
  return <div>{productTitle}</div>;
};
function App() {
  const [counter, setCounter] = useState(0);
  const [productTitle, setProductTitle] = useState("Milk");

  const btnClick = () => {
    setCounter(counter + 1);
  };
  const changeProduct = () => {
    setProductTitle(productTitle === "Milk" ? "Cheese" : "Milk");
  };
  return (
    <>
      <div>
        <Greeting firstName="Fredrik" lastName="Tokle" city="Mosjøen" />
        <Greeting firstName="Ola" lastName="Nordmann" city="Trondheim" />
        <button onClick={btnClick}>Click: {counter}</button>
        <Product productTitle={productTitle} />
        <button onClick={changeProduct}>Change product name</button>
      </div>
    </>
  );
}

export default App;
