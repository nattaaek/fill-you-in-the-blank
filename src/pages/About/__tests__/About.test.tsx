import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import AboutPage from '../About';

describe('AboutPage component', () => {
  it('should render the correct content', () => {
    const { getByText } = render(<AboutPage />);

    expect(getByText('About Us')).toBeInTheDocument();
    expect(getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo et augue ultrices blandit. In hac habitasse platea dictumst. Duis eu massa sit amet elit elementum interdum.')).toBeInTheDocument();
    expect(getByText('Click me')).toBeInTheDocument();
  });
});
