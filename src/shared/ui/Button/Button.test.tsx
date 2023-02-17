import { render, screen } from '@testing-library/react';
import { Button, ColorButton } from './Button';

describe('Tests Button component', () => {
  test('with text children', () => {
    render(<Button>Btn</Button>);
    expect(screen.getByText('Btn')).toBeInTheDocument();
  });

  test('with class colorScheme', () => {
    render(<Button colorScheme={ColorButton.CLEAR}>Btn</Button>);
    expect(screen.getByText('Btn')).toHaveClass('clear');
    screen.debug();
  });
});
