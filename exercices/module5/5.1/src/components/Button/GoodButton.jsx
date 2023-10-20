import { Context as countersContext } from "contexts/countersContext ";
import { useContext } from "react";

const GoodButton = () => {
  const { good, pickGood } = useContext(countersContext);

  const onChangeHandler = (event) => {
    event.preventDefault;
    console.log("Good add");
    pickGood();
  };

  return (
    <div>
      <button onClick={onChangeHandler}>Good - {good}</button>
    </div>
  );
};

export default GoodButton;
