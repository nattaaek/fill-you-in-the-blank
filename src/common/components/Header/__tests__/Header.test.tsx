import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../Header';

describe('Header', () => {
  test('renders the logo image', () => {
    render(<Header />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/logo.png');
  });

  test('renders the menu items', () => {
    render(<Header />);
    const aboutItem = screen.getByText('ABOUT');
    expect(aboutItem).toBeInTheDocument();
    const projectsItem = screen.getByText('PROJECTS');
    expect(projectsItem).toBeInTheDocument();
    const wikiBangkokItem = screen.getByText('WIKIBANGKOK');
    expect(wikiBangkokItem).toBeInTheDocument();
    const volunteerItem = screen.getByText('VOLUNTEER');
    expect(volunteerItem).toBeInTheDocument();
    const searchItem = screen.getByText('SEARCH');
    expect(searchItem).toBeInTheDocument();
    const languageItem = screen.getByText('EN-US');
    expect(languageItem).toBeInTheDocument();
  });
});
