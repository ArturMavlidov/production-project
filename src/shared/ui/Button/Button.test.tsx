import { render, screen } from "@testing-library/react";

import Button, { ThemeButton } from "./index";

describe("Button", () => {
  test("Render test", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("Test clear theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
