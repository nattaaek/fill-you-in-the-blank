import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ExploreProject from '../ExploreProject';


describe('ExploreProject', () => {
  const projects = [
    {
      title: 'Project 1',
      subtitle: 'Subtitle 1',
      image: '/image1.png',
      sdg: 'SDG1',
      policy: 'policy1',
    },
    {
      title: 'Project 2',
      subtitle: 'Subtitle 2',
      image: '/image2.png',
      sdg: 'SDG2',
      policy: 'policy1',
    },
    {
      title: 'Project 3',
      subtitle: 'Subtitle 3',
      image: '/image3.png',
      sdg: 'SDG1',
      policy: 'policy2',
    },
  ];

  test('renders the project cards', () => {
    render(<ExploreProject projects={projects} />);
    const projectCards = screen.getAllByRole('article');
    expect(projectCards).toHaveLength(3);
  });
});
