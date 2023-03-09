import { render, fireEvent } from "@testing-library/react";
import Landing, { LandingProps, Project } from "./Landing";



describe("Landing", () => {
  it("should render search input and policy checkboxes", () => {
    const { getByLabelText, getByText } = render(<Landing projects={[]} />);
    const searchInput = getByLabelText("Search");
    const policy1Checkbox = getByLabelText("Policy 1");
    const policy2Checkbox = getByLabelText("Policy 2");
    const policy3Checkbox = getByLabelText("Policy 3");
    expect(searchInput).toBeDefined();
    expect(policy1Checkbox).toBeDefined();
    expect(policy2Checkbox).toBeDefined();
    expect(policy3Checkbox).toBeDefined();
    getByText("Mayor Policies");
  });

  it("should render SDG checkboxes", () => {
    const { getByLabelText, getByText } = render(<Landing projects={[]} />);
    const sdg1Checkbox = getByLabelText("SDG 1");
    const sdg2Checkbox = getByLabelText("SDG 2");
    const sdg3Checkbox = getByLabelText("SDG 3");
    expect(sdg1Checkbox).toBeDefined();
    expect(sdg2Checkbox).toBeDefined();
    expect(sdg3Checkbox).toBeDefined();
    getByText("SDGs");
  });

  it("should render project cards", () => {
    const { getByText } = render(<Landing projects={[]} />);
    getByText("Project 1");
    getByText("Project 2");
    getByText("Description of project 1");
    getByText("Description of project 2");
    getByText("Policy 1");
    getByText("Policy 2");
    getByText("SDG 1");
    getByText("SDG 2");
  });

  it("should filter projects by search text", () => {
    const { getByText, queryByText, getByLabelText } = render(
      <Landing projects={[]} />
    );
    const searchInput = getByLabelText("Search");
    fireEvent.change(searchInput, { target: { value: "Project 1" } });
    getByText("Project 1");
    getByText("Description of project 1");
    getByText("Policy 1");
    getByText("SDG 1");
    expect(queryByText("Project 2")).toBeNull();
    fireEvent.change(searchInput, { target: { value: "" } });
    getByText("Project 1");
    getByText("Project 2");
  });

  it("should filter projects by selected policies", () => {
    const { getByText, queryByText, getByLabelText } = render(
      <Landing projects={[]} />
    );
    const policy1Checkbox = getByLabelText("Policy 1");
    const policy2Checkbox = getByLabelText("Policy 2");
    const policy3Checkbox = getByLabelText("Policy 3");
    fireEvent.click(policy1Checkbox);
    getByText("Project 1");
    getByText("Description of project 1");
    getByText("Policy 1");
    getByText("SDG 1");
    expect(queryByText("Project 2")).toBeNull();
    fireEvent.click(policy2Checkbox);
    getByText("Project 1");
    getByText("Project 2");
    fireEvent.click(policy3Checkbox);
    expect(queryByText("Project 1")).toBeNull();
    expect(queryByText("Project 2")).toBeNull();
  });

  it("should filter projects by selected SDGs", () => {
    const { getByText, queryByText, getByLabelText } = render(
      <Landing projects={[]} />
    );
    const sdg1Checkbox = getByLabelText("SDG 1");
    const sdg2Checkbox = getByLabelText("SDG 2");
    const sdg3Checkbox = getByLabelText("SDG 3");
    fireEvent.click(sdg1Checkbox);
    getByText("Project 1");
    getByText("Description of project 1");
    getByText("SDG 1");
    expect(queryByText("Project 2")).toBeNull();
    fireEvent.click(sdg2Checkbox);
    getByText("Project 1");
    getByText("Project 2");
    fireEvent.click(sdg3Checkbox);
    expect(queryByText("Project 1")).toBeNull();
    expect(queryByText("Project 2")).toBeNull();
  });
});

