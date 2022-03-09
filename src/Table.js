import React from "react";

const Table = ({ characterProps }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {characterProps.map((character) => {
          //character can be named whatever
          return (
            <tr key={character.id}>
              <td>{character.name}</td>
              <td>{character.job}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
