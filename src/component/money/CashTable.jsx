import React from "react";


export default function CashTable({ columns, data }) {

    return (<div>
         <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ boano, boacash, boatotal }) => (
          <tr key={boano + boacash + boatotal}>
            <td>{boano} 원</td>
            <td>{boacash}</td>
            <td>{boatotal}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>);
}