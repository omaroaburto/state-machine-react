import React from "react";
import "./ListPassengers.css";
const ListPassengers = ({ passengers }) => {
  return (
    <ul className="list-passengers">
      {passengers.map((passenger) => {
        return <li key={passenger}>{passenger}</li>;
      })}
    </ul>
  );
};

export { ListPassengers };
