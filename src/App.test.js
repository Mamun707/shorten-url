import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders URL shortener form', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter long URL/i);
  expect(inputElement).toBeInTheDocument();
});

test('handles invalid URL submission', () => {
  global.alert = jest.fn();

  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter long URL/i);
  const buttonElement = screen.getByText(/Generate Short URL/i);


  fireEvent.change(inputElement, { target: { value: 'invalid-url' } });
  fireEvent.click(buttonElement);

  expect(global.alert).toHaveBeenCalledWith('Invalid URL');

  global.alert.mockClear();
});


test('generates a short URL for valid input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter long URL/i);
  const buttonElement = screen.getByText(/Generate Short URL/i);

  fireEvent.change(inputElement, { target: { value: 'https://testurl.com' } });
  fireEvent.click(buttonElement);

  const shortUrlElement = screen.getByText(/Short URL:/i);
  expect(shortUrlElement).toBeInTheDocument();
});
