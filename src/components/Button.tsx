import { useState } from "react";

interface PropsType {
  name: string;
  friend: string;
  handleClick: () => void;
}

const Button = ({ name, friend, handleClick }: PropsType) => {
  // let [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   console.log("Clicked");
  //   setCounter(++counter);
  // };

  return (
    <>
      <button className="bg-slate-400" onClick={handleClick}>
        Click me
      </button>
      <p>{name}</p>
      <p>{friend}</p>
    </>
  );
};

export default Button;
