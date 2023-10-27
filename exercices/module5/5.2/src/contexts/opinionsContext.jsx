import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [sortedOpinions, setSortedOpinions] = useState([]);

  const increaseOpinionScore = (opinionId) => {
    const newSortedOpinions = [...sortedOpinions]; // Crée une nouvelle copie de l'array
    const opinionToUpdate = newSortedOpinions.find(
      (opinion) => opinion.id === opinionId
    );
    if (opinionToUpdate === undefined) return undefined;

    opinionToUpdate.score = opinionToUpdate.score + 1;
    newSortedOpinions.sort((a, b) => b.score - a.score);
    setSortedOpinions(newSortedOpinions);
  };

  const createOpinion = (opinion) => {
    const newSortedOpinions = sortedOpinions.concat({
      id: uuidv4(),
      text: opinion,
      score: 1,
    });

    newSortedOpinions.sort((a, b) => b.score - a.score);
    setSortedOpinions(newSortedOpinions);
  };

  const exposedValue = {
    sortedOpinions,
    increaseOpinionScore,
    createOpinion,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
