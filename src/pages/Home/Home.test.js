import { RouterProvider, createMemoryRouter } from "react-router-dom";
import * as React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import HomePage from "./Home";
import { renderWithProviders } from "../../utils/utils-for-tests";

describe("HomePage component", () => {
  test("renders nous contacter page", async () => {
    const routes = [
      {
        path: "/",
        element: <HomePage />
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    renderWithProviders(<RouterProvider router={router} />);

    const outputElement = await screen.getByText("C'est par ici, venez.", {selector: 'a'})
    expect(outputElement).toBeInTheDocument();
    expect(outputElement.getAttribute("href")).toBe("/nous_contacter")
  });
});
