import React, { useEffect, useState } from "react";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <main className="main">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Office</th>
            <th>Extension</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.position}</td>
              <td>{row.salary}</td>
              <td>{row.start_date}</td>
              <td>{row.office}</td>
              <td>{row.extn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Main;
