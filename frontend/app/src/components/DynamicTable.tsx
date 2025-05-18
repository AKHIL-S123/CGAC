import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'


const DynamicTable = ({ columns, data, scopedSlots, onSort,onRowClick  }) => {
  const [sortKey, setSortKey] = useState(null);
  const [direction, setDirection] = useState('asc');

  const handleHeaderClick = (col) => {
    if (!col.sortable) return;

    const newDirection = col.key === sortKey && direction === 'asc' ? 'desc' : 'asc';
    setSortKey(col.key);
    setDirection(newDirection);

    if (onSort) {
      onSort(col.key, newDirection);
    }
  };

  const handleRowClick = (row, colKey) => {
    if (onRowClick && colKey !== 'actions') { // Check if onRowClick exists and the clicked column is not 'actions'
      onRowClick(row);
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow-md bg-white">
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead className=" bg-[#00246B] text-[#CADCFC]">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`p-4 font-semibold cursor-pointer select-none ${
                  col.sortable ? 'hover:text-blue-600' : ''
                }`}
                onClick={() => handleHeaderClick(col)}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {sortKey === col.key && (
                    direction === 'asc' ? (
                      <FiChevronUp size={16} className="text-gray-500" />
                    ) : (
                      <FiChevronDown size={16} className="text-gray-500" />
                    )
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 border-t border-gray-100 transition"
            >
             {columns.map((col) => (
                <td
                  key={col.key}
                  className={`p-4 ${col.key !== 'actions' ? 'cursor-pointer' : ''}`} // Apply cursor-pointer conditionally
                  onClick={() => handleRowClick(row, col.key)} // Pass the column key to handleRowClick
                >
                  {scopedSlots?.[col.key]
                    ? scopedSlots[col.key](row)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
