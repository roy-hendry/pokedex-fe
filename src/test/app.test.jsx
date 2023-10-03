import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App.jsx';

describe('App', () => {
  test('renders the landing page', () => {
    render(<App />);

    const logo = screen.getByRole('img', { name: /pokemonlogo/i });

    expect(logo).toBeInTheDocument();
  });
});
