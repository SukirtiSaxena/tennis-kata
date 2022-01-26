import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lable for Player 1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Name Of Player 1/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders lable for Player 2', () => {
  render(<App />);
  expect(screen.getByText(/Name Of Player 2/i)).toBeInTheDocument();
});

test('renders button 1', () => {
  render(<App/>);
  expect(screen.getByTestId('button1')).toBeInTheDocument();
});

test('renders button 2', () => {
  render(<App/>);
  expect(screen.getByTestId('button2')).toBeInTheDocument();
});

