import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import '@testing-library/jest-dom'

describe('Footer', () => {
  test('renders the logo', () => {
    render(<Footer />);
    const logoElement = screen.getByText('Logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveStyle('font-weight: 700');
    expect(logoElement).toHaveStyle('font-size: 32px');
  });

  test('renders the links', () => {
    render(<Footer />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '#');
    expect(aboutLink).toHaveStyle('color: #ffffff');
    expect(aboutLink).toHaveStyle('font-weight: 700');
    expect(aboutLink).toHaveStyle('margin-left: 24px');
    const projectsLink = screen.getByRole('link', { name: 'Projects' });
    expect(projectsLink).toBeInTheDocument();
    const contactLink = screen.getByRole('link', { name: 'Contact' });
    expect(contactLink).toBeInTheDocument();
  });
});
