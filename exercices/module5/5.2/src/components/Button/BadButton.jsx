import { Context as countersContext } from "contexts/opinionsContext";
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
