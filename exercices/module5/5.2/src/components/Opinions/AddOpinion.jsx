import { useContext, useState } from "react";
import { Context as OpinionsContext } from "contexts/opinionsContext";

const AddOpinions = () => {
  const [newOpinion, setNewOpinion] = useState("");

  const { createOpinion } = useContext(OpinionsContext);

  const handleOnChange = (e) => setNewOpinion(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createOpinion(newOpinion);
    setNewOpinion("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        placeholder="new opinion"
        value={newOpinion}
        onChange={handleOnChange}
      />
      <input type="submit" value="Add new opinion" />
    </form>
  );
};

export default AddOpinions;
