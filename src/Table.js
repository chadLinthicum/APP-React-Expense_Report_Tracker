import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Chad</td>
        <td>Linthicum</td>
      </tr>
      <tr>
        <td>Emily</td>
        <td>Cullen</td>
      </tr>
      <tr>
        <td>Erica</td>
        <td>Linthicum</td>
      </tr>
      <tr>
        <td>James</td>
        <td>Cullen</td>
      </tr>
    </tbody>
  );
};

function Table() {
  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
}

export default Table;
