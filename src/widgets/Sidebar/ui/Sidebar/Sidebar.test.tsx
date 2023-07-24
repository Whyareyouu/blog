import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar tests", () => {
  test("Render sidebar", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Test c", () => {
    render(<Sidebar />);
    const button = screen.getByTestId("sidebar_button");
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    fireEvent.click(button);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
