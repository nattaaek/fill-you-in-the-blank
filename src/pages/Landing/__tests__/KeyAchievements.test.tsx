import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import KeyAchievements from '../KeyAchievements';


describe('KeyAchievements', () => {
  const achievements = [
    {
      title: 'Achievement 1',
      count: 100,
      icon: <i className="fa fa-users"></i>,
    },
    {
      title: 'Achievement 2',
      count: 200,
      icon: <i className="fa fa-calendar"></i>,
    },
    {
      title: 'Achievement 3',
      count: 300,
      icon: <i className="fa fa-money"></i>,
    },
  ];

  test('renders the achievement cards', () => {
    render(<KeyAchievements achievements={achievements} />);
    const achievementCards = screen.getAllByRole('article');
    expect(achievementCards).toHaveLength(3);
  });

  test('renders the achievement details', () => {
    render(<KeyAchievements achievements={achievements} />);
    const achievementTitle1 = screen.getByText('Achievement 1');
    expect(achievementTitle1).toBeInTheDocument();
    const achievementCount1 = screen.getByText('100');
    expect(achievementCount1).toBeInTheDocument();
    const achievementTitle2 = screen.getByText('Achievement 2');
    expect(achievementTitle2).toBeInTheDocument();
    const achievementTitle3 = screen.getByText('Achievement 3');
    expect(achievementTitle3).toBeInTheDocument();
    const achievementCount3 = screen.getByText('300');
    expect(achievementCount3).toBeInTheDocument();
  });
});
