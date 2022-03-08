import React from "react";

const tableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const tableBody = () => {
  const persons = [
    {
      name: "Chad",
      job: "Software Dev",
    },
    {
      name: "Emily",
      job: "Vet Assistant",
    },
    {
      name: "Erica",
      job: "Teacher",
    },
    {
      name: "James",
      job: "Salesman",
    },
  ];
  return <tbody>{persons.job}</tbody>;
};

const Table = () => {
  <tableBody />;
};

export default Table;
