import React from 'react';

interface TableProps {
  headers: string[];
  rows: Array<{ [key: string]: string }>;
}

export const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="mt-8 w-full rounded-lg bg-white p-8 shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map(header => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={row.id}>
              {headers.map(header => (
                <td key={`${header}-${index}`} className="px-6 py-4 whitespace-nowrap" data-testid={`cell-${header}-${index}`}>
                  {row?.[header] ?? ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
