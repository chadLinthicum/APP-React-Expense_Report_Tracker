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
  return <tbody />;
};

const Table = () => {
  const { characterData } = this.props;
  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} />
    </table>
  );
};

export default Table;
