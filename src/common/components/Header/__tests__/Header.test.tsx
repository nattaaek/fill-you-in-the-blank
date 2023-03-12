import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  test('renders the logo image', () => {
    render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
  });

  test('renders the menu items', () => {
    render(<BrowserRouter>
        <Header />
    </BrowserRouter>);
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
  });
});
