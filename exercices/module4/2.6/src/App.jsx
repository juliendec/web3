import { useState } from "react";
import Filter from "./components/Filter/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhoneName] = useState("");
  const [id, setId] = useState(persons.length);

  const addName = (event) => {
    let already = false;
    event.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`);
        already = true;
      }
    }

    if (already === false) {
      let newId = id;
      newId++;
      setId(newId);

      const personsBis = persons;
      personsBis.push({ name: newName, number: newPhone, id: newId });
      setPersons(personsBis);
      console.log(persons);
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setPhoneName(event.target.value);
  };

  const filteredPersons = (personName) => {
    const personFilter = [];

    persons.map((personeach) => {
      if (personeach.name.toLowerCase().includes(personName)) {
        personFilter.push(personeach);
      }
    });

    setPersons(personFilter);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeHandler={filteredPersons} />
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {" "}
            {person.name} - {person.number}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
