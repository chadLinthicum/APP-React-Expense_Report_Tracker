import React, { useState } from "react";
import Table from "./Table";
import uuid from "react-uuid";

const Form = () => {
  window.onload = function () {
    // let localStorageExpense = JSON.parse(localStorage.getItem("expense"));
    // if (window.localStorage.length > 0) {
    //   return setExpenseArray([...expenseArray, localStorageExpense]);
    // }
    console.table(window.localStorage);
  };

  //set local storage to be an array
  //function that will set local storage to an array
  //when asks for expenses key, return an array

  const [expenseArray, setExpenseArray] = useState([]);
  const [date, setDate] = useState("");
  const [where, setWhere] = useState("");
  const [item, setItem] = useState("");
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState("");

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
    //pushes character object into characterData array
    setExpenseArray([...expenseArray, newExpense]);
    localStorage.setItem("expense", JSON.stringify(newExpense));
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

// if (
//   !paymentType.value ||
//   !purchase.value ||
//   !date.value ||
//   !amount.value ||
//   !location.value
//   ) {
//   alert('Please fill out fields before submitting.');
//   return;
// }
