import { Context as LanguageContext } from "contexts/LanguageContext";
import { useContext } from "react";

const FoobarButton = () => {
  const { language, pickLanguage } = useContext(LanguageContext);

  const onChangeHandler = (event) => {
    event.preventDefault;
    console.log("TEST");
  };

  return (
    <div>
      <button onClick={onChangeHandler}>TEST BUTTON -{language}</button>
    </div>
  );
};

export default FoobarButton;
