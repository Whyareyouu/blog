import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";
import { ThemeButton } from "./Button";

describe("Button tests", () => {
  test("Correct rendering of the button component", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("Button with clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText("test")).toHaveClass("clear");
  });
});
