import { Context as OpinionsContext } from "contexts/opinionsContext";
import { useContext } from "react";
import Opinion from "components/Opinions/Opinion";

const ListOpinions = () => {
  const { sortedOpinions } = useContext(OpinionsContext);

  return sortedOpinions.map((opinion) => (
    <Opinion key={opinion.id} {...{ opinion }} />
  ));
};

export default ListOpinions;
