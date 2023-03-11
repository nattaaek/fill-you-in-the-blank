import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import YourCauses from "../YourCauses";

const mockCauses = [
  {
    title: "Clean Water for Everyone",
    subtitle: "Join our mission to provide clean water to communities in need",
    image: "/cause-1.jpg",
  },
  {
    title: "Plant Trees to Combat Climate Change",
    subtitle: "Join us in planting trees to reduce carbon emissions and combat climate change",
    image: "/cause-2.jpg",
  },
  {
    title: "Provide Education for Children in Need",
    subtitle: "Help us provide education to children who don't have access to it",
    image: "/cause-3.jpg",
  },
];

describe("YourCauses", () => {
  it("renders the component", () => {
    render(<YourCauses causes={mockCauses} />);
    const component = screen.getByTestId("your-causes");
    expect(component).toBeInTheDocument();
  });

  it("renders the correct number of causes", () => {
    render(<YourCauses causes={mockCauses} />);
    const causeItems = screen.getAllByTestId("cause-item");
    expect(causeItems.length).toEqual(mockCauses.length);
  });

  it("renders the cause subtitles", () => {
    render(<YourCauses causes={mockCauses} />);
    const causeSubtitles = screen.getAllByTestId("cause-subtitle");
    expect(causeSubtitles.length).toEqual(mockCauses.length);
    mockCauses.forEach((cause, index) => {
      expect(causeSubtitles[index]).toHaveTextContent(cause.subtitle);
    });
  });

  it("renders the join now buttons", () => {
    render(<YourCauses causes={mockCauses} />);
    const joinButtons = screen.getAllByRole("button", { name: /join now/i });
    expect(joinButtons.length).toEqual(mockCauses.length);
  });
});
