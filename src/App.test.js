import { render, screen } from "@testing-library/react";
import App from "./AppContent";

test("renders learn react link", () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
