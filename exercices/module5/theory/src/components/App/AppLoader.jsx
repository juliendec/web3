import { ProviderWrapper as LanguageProviderWrapper } from "contexts/LanguageContext";
import App from "components/App/App";
import FoobarButton from "components/FoobarButton/FoobarButton";

const AppLoader = () => {
  return (
    <LanguageProviderWrapper>
      <App />
      <FoobarButton />
    </LanguageProviderWrapper>
  );
};

export default AppLoader;
