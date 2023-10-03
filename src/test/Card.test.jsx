import { act, fireEvent, render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card', () => {
  const pokemonData = {
    id: 1,
    name: 'Bulbasaur',
    caught: false,
    basicSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  };

  test('that it renders the component with the correct data', () => {
    render(<Card pokemonData={pokemonData} setSelectedPokemon={() => {}} />);

    const idElement = screen.getByRole('heading', { name: /1/i });
    const nameElement = screen.getByRole('heading', { name: /bulbasaur/i });
    const imageElement = screen.getByRole('img', { name: /bulbasaur/i });

    expect(idElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
