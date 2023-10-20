import { Context as countersContext } from "contexts/countersContext ";
import { useContext } from "react";

const BadButton = () => {
  const { bad, pickBad } = useContext(countersContext);

  const onChangeHandler = (event) => {
    event.preventDefault;
    console.log("bad add");
    pickBad();
  };

  return (
    <div>
      <button onClick={onChangeHandler}>Bad - {bad}</button>
    </div>
  );
};

export default BadButton;
