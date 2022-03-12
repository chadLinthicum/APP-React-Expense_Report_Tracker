import React from "react";

const Table = ({ characterProps }) => {
  function alert() {
    console.log("Test");
  }

  return (
    <div>
      <br />
      <table>
        <thead>
          <tr>
            <th className="erase-button-header"></th>
            <th className="expense-table">Date</th>
            <th className="expense-table">Item</th>
            <th className="expense-table">Amount</th>
            <th className="expense-table">Where</th>
          </tr>
        </thead>
        <tbody>
          {characterProps.map((character) => {
            //character can be named whatever
            return (
              <tr key={character.id}>
                <td>
                  <button className="erase-button" onClick={alert()}>
                    {character.erase}
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
