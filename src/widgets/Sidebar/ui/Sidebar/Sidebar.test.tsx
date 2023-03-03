import { fireEvent, render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
// eslint-disable-next-line max-len
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("render in document", () => {
    // const SidebarWithTranslation = withTranslation()(Sidebar);

    // render(<SidebarWithTranslation />);
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
