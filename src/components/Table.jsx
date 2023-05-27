import React from "react";

function Table({ header, data }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-no-wrap">
        <thead className="text-xs font-semibold tracking-wide text-left uppercase border-b bg-card text-white">
          <tr>
            {header.map((item) => (
              <td className="px-4 py-3">{item}</td>
            ))}
          </tr>
        </thead>
        <tbody className="bg-card divide-y border-indigo-500/50">
          {data.map((item) => (
            <tr>
              <td className="px-4 py-3">
                <span className="text-sm text-white">{item.client}</span>
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-white">{item.amount}</span>
              </td>
              <td className="px-4 py-3">
                {
                    item.status === "Approved" ? (
                        <span className="text-sm text-green-500">{item.status}</span>
                    ) : (
                        <span className="text-sm text-red-500">{item.status}</span>
                    )
                }
              </td>
              <td className="px-4 py-3">
                <span className="text-sm text-white">{item.date}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
