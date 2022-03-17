import React from "react";

const Table = ({ expenseArray, setExpenseArray }) => {
  const removeExpense = (e, id) => {
    e.preventDefault();
    //redraws all expenses that do match the ID of the ones being deleted
    const expensesNotToBeDeleted = expenseArray.filter(
      (expense) => !(expense.id === id)
    );
    setExpenseArray(expensesNotToBeDeleted);
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
          {/* expense can be named whatever */}
          {expenseArray.map((expense) => {
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
