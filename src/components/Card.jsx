import React from "react";

export default function Card({icons, title, data}) {
  return (
    <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-card">
      <div className="p-4 flex items-center">
        <div className="p-3 rounded-full text-white bg-purple-600 mr-4">
            {icons}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-400">
                {title}
            </p>
            <p className="text-lg font-semibold text-white">
                {data}
            </p>
        </div>
      </div>
    </div>
  );
}
