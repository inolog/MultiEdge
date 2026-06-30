// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MultiEdge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MultiEdge/i);
    expect(titleElement).toBeInTheDocument();
});
