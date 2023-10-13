import { useState } from "react";

const Filter = ({ onChangeHandler }) => {
  const [newSearch, setSearch] = useState("");

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    onChangeHandler(newSearch.toLowerCase());
  };

  return (
    <div>
      filter shown with
      <input type="text" value={newSearch} onChange={handleSearchChange} />
    </div>
  );
};

export default Filter;
