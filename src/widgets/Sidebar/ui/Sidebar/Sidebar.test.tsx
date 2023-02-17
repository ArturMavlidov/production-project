import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/tests/renderWithTranslation";

import Sidebar from "./index";

describe("Sidebar", () => {
  test("Button with text", () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("Test toggle", () => {
    renderWithTranslation(<Sidebar />);

    const toggleBtn = screen.getByTestId("sidebar-toggle");
    const sidebarEl = screen.getByTestId("sidebar");

    expect(sidebarEl).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    expect(sidebarEl).toHaveClass("collapsed");
  });
});
