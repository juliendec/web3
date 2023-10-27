import { Context as OpinionsContext } from "contexts/opinionsContext";
import { useContext } from "react";

const Opinion = ({ opinion }) => {
  const { increaseOpinionScore } = useContext(OpinionsContext);

  return (
    <div>
      <span>{`${opinion.text} : ${opinion.score} `} </span>
      <button onClick={() => increaseOpinionScore(opinion.id)}>Vote</button>
    </div>
  );
};

export default Opinion;
