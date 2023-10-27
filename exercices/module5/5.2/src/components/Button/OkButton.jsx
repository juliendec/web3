import { Context as countersContext } from "contexts/opinionsContext";
import { useContext } from "react";

const OkButton = () => {
  const { ok, pickOk } = useContext(countersContext);

  const onChangeHandler = (event) => {
    event.preventDefault;
    console.log("ok add");
    pickOk();
  };

  return (
    <div>
      <button onClick={onChangeHandler}>Ok - {ok}</button>
    </div>
  );
};

export default OkButton;
