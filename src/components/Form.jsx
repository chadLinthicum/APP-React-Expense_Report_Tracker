import React, { useState } from "react";
import Table from "./Table";

const Form = () => {
  const [characterData, setCharacterData] = useState([]);
  const [date, setDate] = useState("");
  const [where, setWhere] = useState("");
  const [item, setItem] = useState("");
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState("");

  const character = {
    id: Math.round(Date.now() / 10000),
    date: date,
    where: where,
    payment: payment,
    item: item,
    amount: amount,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharacterData([...characterData, character]);
  };

  return (
    <div>
      <br />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            Date
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>
          <div className="form-field">
            Where
            <input
              type="text"
              onChange={(e) => setWhere(e.target.value)}
              value={where}
              placeholder="Where did you buy it?"
            />
          </div>
          <div className="form-field">
            Payment
            <select>
              <option
                onChange={(e) => setPayment(e.target.value)}
                value={payment}
              >
                Select payment type...
              </option>
            </select>
          </div>
          <div className="form-field">
            Item
            {}
            <input
              type="text"
              onChange={(e) => setItem(e.target.value)}
              value={item}
              placeholder="What did you buy?"
            />
          </div>
          <div className="form-field">
            Amount
            <input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              value={character.amount}
              placeholder="How much did it cost?"
            />
          </div>
          <br />
          <br />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <br />
        <Table props={characterData} />
      </div>
    </div>
  );
};

export default Form;
