import { ProviderWrapper as LanguageProviderWrapper } from "contexts/countersContext ";
import App from "components/App/App";
import GoodButton from "components/Button/GoodButton";
import OkButton from "components/Button/OkButton";
import BadButton from "components/Button/BadButton";
import ResetButton from "components/Button/ResetButton";

const AppLoader = () => {
  return (
    <LanguageProviderWrapper>
      <App />
      <GoodButton />
      <br></br>
      <OkButton />
      <br></br>
      <BadButton />
      <br></br>
      <ResetButton />
    </LanguageProviderWrapper>
  );
};

export default AppLoader;
