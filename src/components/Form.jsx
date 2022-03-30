import React, { useEffect, useState } from "react";
import Table from "./Table";
import uuid from "react-uuid";

const Form = () => {
  const [expenseArray, setExpenseArray] = useState(
    JSON.parse(localStorage.getItem("expense")) || []
  );
  //Default value of expenseArray is the array of local storage OR an empty array
  const [date, setDate] = useState("");
  const [where, setWhere] = useState("");
  const [item, setItem] = useState("");
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenseArray));
  }, [expenseArray]);
  //Watches expenseArray and updates expenseArray whenever it changes. This also handles the side-effect of when expense are deleted.

  const newExpense = {
    id: uuid(),
    date: date,
    where: where,
    payment: payment,
    item: item,
    amount: amount,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseArray((previous) => [...previous, newExpense]);
    //Pushes character object into characterData array
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
            <select onChange={(e) => setPayment(e.target.value)}>
              <option value="">Select payment type...</option>
              <option value="Cash">Cash</option>
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
