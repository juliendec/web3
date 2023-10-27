import App from "components/App/App";
import ListOpinions from "components/Opinions/ListOpinions";
import AddOpinions from "components/Opinions/AddOpinion";
import { ProviderWrapper as OpinionProviderWrapper } from "contexts/opinionsContext";

const AppLoader = () => {
  return (
    <div>
      <App />
      <OpinionProviderWrapper>
        <ListOpinions />
        <AddOpinions />
      </OpinionProviderWrapper>
    </div>
  );
};

export default AppLoader;
