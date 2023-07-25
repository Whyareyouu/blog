import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Sidebar tests", () => {
  test("Render sidebar", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Test c", () => {
    componentRender(<Sidebar />);
    const button = screen.getByTestId("sidebar_button");
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    fireEvent.click(button);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
