import React from "react";

const Table = ({ characterProps }) => {
  return (
    <div>
      <br />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Where</th>
          </tr>
        </thead>
        <tbody>
          {characterProps.map((character) => {
            //character can be named whatever
            return (
              <tr key={character.id}>
                <td>
                  <button className="erase-button">{character.erase}</button>
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
