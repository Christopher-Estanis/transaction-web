import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table component', () => {
  const headers = ['Name', 'Age', 'City'];
  const rows: Array<{ [key: string]: string }> = [
    { id: '1', Name: 'John', Age: '30', City: 'New York' },
    { id: '2', Name: 'Jane', Age: '25', City: 'Los Angeles' },
  ];

  const rowsWithMissingData: Array<{ [key: string]: string }> = [
    { id: '1', Name: 'John', Age: '30' }, // Missing City
    { id: '2', Name: 'Jane', City: 'Los Angeles' }, // Missing Age
  ];

  test('renders without crashing', () => {
    render(<Table headers={headers} rows={rows} />);
  });

  test('renders table headers correctly', () => {
    render(<Table headers={headers} rows={rows} />);
    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders table rows correctly', () => {
    render(<Table headers={headers} rows={rows} />);
    rows.forEach(row => {
      expect(screen.getByText(row.Name)).toBeInTheDocument();
      expect(screen.getByText(row.Age)).toBeInTheDocument();
      expect(screen.getByText(row.City)).toBeInTheDocument();
    });
  });

  test('handles missing data gracefully', () => {
    render(<Table headers={headers} rows={rowsWithMissingData} />);

    // Verifica se os dados "John" e "30" estão presentes na primeira linha
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();

    // Verifica se os dados "Jane" e "Los Angeles" estão presentes na segunda linha
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Los Angeles')).toBeInTheDocument();

    // Verifica se a célula de cidade na primeira linha está vazia
    const cityCell1 = screen.getByTestId('cell-City-0'); 
    expect(cityCell1).toBeEmptyDOMElement();

    // Verifica se a célula de idade na segunda linha está vazia
    const ageCell2 = screen.getByTestId('cell-Age-1');
    expect(ageCell2).toBeEmptyDOMElement();
  });
});