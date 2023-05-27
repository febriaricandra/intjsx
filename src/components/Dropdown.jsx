import React from "react";

export default function Dropdown({ open, data}) {
  return (
    <div
      className={
        open
          ? "absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700 right-0"
          : "hidden absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700 right-0"
      }
    >
        {data.map((item) => (
            <p className="text-sm font-semibold">
                {item}
            </p>
        ))}
    </div>
  );
}
