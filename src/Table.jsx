import React from "react";

const Table = ({ props }) => {
  return (
    <div>
      <br />
      <table>
        <thead>
          <tr>
            <th className="expense-table"></th>
            <th className="expense-table">Date</th>
            <th className="expense-table">Item</th>
            <th className="expense-table">Amount</th>
            <th className="expense-table">Where</th>
          </tr>
        </thead>
        <tbody>
          {props.map((character) => {
            //character can be named whatever
            return (
              <tr key={character.id}>
                <td>
                  <button className="erase-button" onClick={alert("test")}>
                    x
                  </button>
                </td>
                <td>{character.date}</td>
                <td>{character.item}</td>
                <td>${character.amount}</td>
                <td>{character.where}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
