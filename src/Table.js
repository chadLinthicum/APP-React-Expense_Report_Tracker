import React from "react";

const Table = () => {
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
  return <div>{persons}</div>;
};

export default Table;

// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Job</th>
//       </tr>
//     </thead>
//   );
// };

// const TableBody = () => {
//   return <tbody>{persons.job}</tbody>;
// };
