import React from "react";

const Table = ({ props }) => {
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
          {props.map((character) => {
            //character can be named whatever
            return (
              <tr key={character.id}>
                <td>{character.date}</td>
                <td>{character.where}</td>
                <td>{character.payment}</td>
                <td>{character.item}</td>
                <td>${character.amount}</td>
                <td>
                  <button
                    className="erase-button"
                    type="button"
                    onClick={() => alert("test")}
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
