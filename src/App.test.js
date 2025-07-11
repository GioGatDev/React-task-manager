import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task manager navigation', () => {
  render(<App />);
  const navigationElement = screen.getByRole('navigation');
  expect(navigationElement).toBeInTheDocument();
});

test('renders task form', () => {
  render(<App />);
  const titleInput = screen.getByPlaceholderText(/título/i);
  expect(titleInput).toBeInTheDocument();
});

test('renders task list header', () => {
  render(<App />);
  const listHeader = screen.getByText('Lista de Tareas');
  expect(listHeader).toBeInTheDocument();
});
