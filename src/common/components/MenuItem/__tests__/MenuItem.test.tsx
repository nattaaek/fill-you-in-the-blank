import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import MenuItem from '../MenuItem';

describe('MenuItem', () => {
  test('renders the label', () => {
    render(<MenuItem label="ABOUT" />);
    const labelElement = screen.getByText('ABOUT');
    expect(labelElement).toBeInTheDocument();
  });
});
