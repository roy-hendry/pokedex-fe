import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import LandingPage from '../pages/LandingPage';

describe('LandingPage', () => {
  test('that it renders loading state initially', () => {
    render(<LandingPage />);

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
  });

  test('that it renders loading state initially', () => {
    render(<LandingPage />);
    const logo = screen.getByRole('img', { name: /pokemonlogo/i });

    expect(logo).toBeInTheDocument();
  });
});
