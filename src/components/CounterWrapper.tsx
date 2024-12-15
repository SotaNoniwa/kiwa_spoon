import React, { useState } from "react";
import Button from "./Button";

const CounterWrapper = ({ yesNo }: any) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("clicked!");
    setCounter(counter + 1);
    console.log(yesNo);
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <Button name="Sota" friend="Misa" handleClick={handleClick} />
    </>
  );
};

export default CounterWrapper;
