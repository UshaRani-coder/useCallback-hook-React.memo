import React from "react";
import { useState } from "react";
import Title from "./Title.jsx";
import ChildComp1 from "./ChildComp1.jsx";
import ChildComp2 from "./ChildComp2.jsx";
import Button from "./Button.jsx";
import { useCallback } from "react";
const ParentComp = () => {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  },[count])
  const incrementPrice = useCallback(() => {
    setPrice(price + 100);
  },[price])
  return (
    <div>
      <Title />
      <ChildComp1 count={count} />
      <Button clickHandler={incrementCount}>Increment Count </Button>
      <ChildComp2 price={price} />
      <Button clickHandler={incrementPrice}>Increment Price </Button>
    </div>
  );
};

export default ParentComp;
