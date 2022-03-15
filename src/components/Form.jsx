import React, { useState } from "react";
import Table from "./Table";

const Form = () => {
  const [expenseArray, setExpenseArray] = useState([]);
  const [date, setDate] = useState("");
  const [where, setWhere] = useState("");
  const [item, setItem] = useState("");
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState("");

  const newExpense = {
    id: Math.round(Date.now() / 1000),
    date: date,
    where: where,
    payment: payment,
    item: item,
    amount: amount,
    done: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseArray([...expenseArray, newExpense]); //pushes character object into characterData array
    // console.log("CD = ", expenseData);
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
              value={newExpense.amount}
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
        <Table expenseArray={expenseArray} setExpenseArray={setExpenseArray} />
      </div>
    </div>
  );
};

export default Form;
