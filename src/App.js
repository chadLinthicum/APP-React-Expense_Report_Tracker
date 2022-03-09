import React, { useState } from "react";
import Table from "./Table";

function App() {
  const characters = [
    {
      id: "001",
      name: "Charlie",
      job: "Janitor",
    },
    {
      id: "002",
      name: "Mac",
      job: "Bouncer",
    },
    {
      id: "003",
      name: "Dee",
      job: "Aspring actress",
    },
    {
      id: "004",
      name: "Dennis",
      job: "Bartender",
    },
  ];

  const [characterData, setCharacterData] = useState([]);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const character = {
    id: Math.floor(Math.random() * 1000),
    name: name,
    job: job,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCharacterData([...characterData, character]); //spread operator
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {" "}
        Name
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        Job
        <input
          type="text"
          onChange={(e) => setJob(e.target.value)}
          value={job}
        />
        <br />
        <input type="submit" />
      </form>
      <Table characterProps={characterData} />
    </div>
  );
}

export default App;
