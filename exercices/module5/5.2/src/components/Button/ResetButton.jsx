import { Context as countersContext } from "contexts/opinionsContext";
import { useContext } from "react";

const BadButton = () => {
  const { pickReset } = useContext(countersContext);

  const onChangeHandler = (event) => {
    event.preventDefault;
    console.log("reset");
    pickReset();
  };

  return (
    <div>
      <button onClick={onChangeHandler}>Reset</button>
    </div>
  );
};

export default BadButton;
