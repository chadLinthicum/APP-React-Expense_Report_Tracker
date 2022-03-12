import React, { useState } from "react";
import Table from "./Table";

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const character = {
    id: Math.round(Date.now() / 1000),
    date: date,
    item: item,
    amount: amount,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCharacterData([...characterData, character]); //spread operator
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          Date
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          Item
          <input
            type="text"
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
          Amount
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
          <br />
          <input type="submit" />
        </form>
        <Table characterProps={characterData} />
      </div>
    </div>
  );
}

export default App;
