import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import UpcomingEvents from "../UpcomingEvents";

describe("UpcomingEvents", () => {
  const mockEvents = [
    {
      date: "12 MAR",
      title: "Community Cleanup Day",
      location: "Bangkok, Thailand",
    },
    {
      date: "23 MAR",
      title: "Plant Trees at the Park",
      location: "Quezon City, Philippines",
    },
    {
      date: "28 MAR",
      title: "Beach Cleanup at Waikiki",
      location: "Honolulu, Hawaii",
    },
  ];

  it("renders the upcoming events section", () => {
    render(<UpcomingEvents events={mockEvents} />);

    const upcomingEvents = screen.getByTestId("upcoming-events");
    expect(upcomingEvents).toBeInTheDocument();
  });

  it("renders the upcoming events with correct data", () => {
    render(<UpcomingEvents events={mockEvents} />);

    const eventTitles = screen.getAllByTestId("card-content");
    const eventDates = screen.getAllByText(/MAR/);
    const eventLocations = screen.getAllByText(/Thailand|Philippines|Hawaii/);
    const rsvpButtons = screen.getAllByRole("button", { name: "RSVP" });

    expect(eventTitles).toHaveLength(3);
    expect(eventTitles[0]).toHaveTextContent("Community Cleanup Day");
    expect(eventDates).toHaveLength(3);
    expect(eventDates[0]).toHaveTextContent("12 MAR");
    expect(eventLocations).toHaveLength(3);
    expect(eventLocations[0]).toHaveTextContent("Bangkok, Thailand");
    expect(rsvpButtons).toHaveLength(3);
  });

  it("renders the view all events button", () => {
    render(<UpcomingEvents events={mockEvents} />);

    const viewAllEventsButton = screen.getByRole("link", {
      name: "View All Events",
    });
    expect(viewAllEventsButton).toBeInTheDocument();
    expect(viewAllEventsButton).toHaveAttribute("href", "/events");
  });
});
