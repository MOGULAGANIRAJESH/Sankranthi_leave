import React from "react";
import "../App.css";

const Team=() =>{
  const leaveData = [
    { id: 1, name: "Y.Mohan kumar", date: "12,13,14,16" },
    { id: 2, name: "M.Jeevan Kumar", date: "12,13,14,16" },
    { id: 3, name: "V. shiva subrahamanyam", date: "12,13,14,16" },
    { id: 4, name: "M.Rajesh", date: "14,16" },
    { id: 5, name: "Sai lakshmi", date: "14,16" },
    { id: 6, name: "B.Gopi Prasanna", date: "16" },
    { id: 7, name: "Thrived", date: "16" },
  ];

  return (
    <div className="container">
      <h1>Leave Details</h1>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Date of Leave</th>
          </tr>
        </thead>

        <tbody>
          {leaveData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Team;