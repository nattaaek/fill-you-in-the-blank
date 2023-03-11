import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Landing from "../Landing";

describe("Landing", () => {
  test("renders project carousel", () => {
    render(<Landing />);
    const projectCarousel = screen.getByTestId("project-carousel");
    expect(projectCarousel).toBeInTheDocument();
  });

  test("renders your causes", () => {
    render(<Landing />);
    const yourCauses = screen.getByTestId("your-causes");
    expect(yourCauses).toBeInTheDocument();
  });

  test("renders explore project", () => {
    render(<Landing />);
    const exploreProject = screen.getByTestId("explore-project");
    expect(exploreProject).toBeInTheDocument();
  });

  test("renders upcoming events", () => {
    render(<Landing />);
    const upcomingEvents = screen.getByTestId("upcoming-events");
    expect(upcomingEvents).toBeInTheDocument();
  });

  test("renders key achievements", () => {
    render(<Landing />);
    const keyAchievements = screen.getByTestId("key-achievements");
    expect(keyAchievements).toBeInTheDocument();
  });

  test("renders footer", () => {
    render(<Landing />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
