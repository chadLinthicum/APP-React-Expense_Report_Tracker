import React from "react";
// import Table from "./Table";

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

function App() {
  return (
    <div className="container">
      <div>{persons}</div>;
    </div>
  );
}

export default App;
