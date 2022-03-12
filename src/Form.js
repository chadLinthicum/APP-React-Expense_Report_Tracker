import React, { useState } from "react";
import Table from "./Table";

const Form = () => {
  const [characterData, setCharacterData] = useState([]);
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [where, setWhere] = useState("");

  const character = {
    id: Math.round(Date.now() / 1000),
    date: date,
    item: item,
    amount: amount,
    where: where,
  };

  function handleSubmit(e) {
    e.preventDefault();
    setCharacterData([...characterData, character]);
  }

  return (
    <div>
      <br />
      <div className="container">
        <form onSubmit={handleSubmit}>
          Date
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          Item
          {}
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
          Where
          <input
            type="text"
            onChange={(e) => setWhere(e.target.value)}
            value={where}
          />
          <br />
          <br />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <Table props={characterData} />
      </div>
    </div>
  );
};

export default Form;
