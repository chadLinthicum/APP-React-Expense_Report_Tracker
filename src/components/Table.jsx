import React from "react";

const Table = ({ expenseArray, setExpenseArray }) => {
  const removeExpense = (e, id) => {
    e.preventDefault();
    const expenseNotToBeDeleted = expenseArray.filter(
      (expense) => !(expense.id === id && expense.done)
    );

    setExpenseArray(expenseNotToBeDeleted);
    console.log(expenseNotToBeDeleted);
  };

  // console.log(expenseArray);

  return (
    <div className="table-expenses">
      <br />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Where</th>
            <th>Payment</th>
            <th>Item</th>
            <th>Amount</th>
            <th>---</th>
          </tr>
        </thead>
        <tbody>
          {expenseArray.map((expense) => {
            //character can be named whatever
            return (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.where}</td>
                <td>{expense.payment}</td>
                <td>{expense.item}</td>
                <td>${expense.amount}</td>
                <td>
                  <button
                    className="erase-button"
                    type="button"
                    onClick={(e) => removeExpense(e, expense.id)}
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
