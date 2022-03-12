import React from "react";

const Table = ({ characterProps }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Item</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {characterProps.map((character) => {
          //character can be named whatever
          return (
            <tr key={character.id}>
              <td>{character.date}</td>
              <td>{character.item}</td>
              <td>${character.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
