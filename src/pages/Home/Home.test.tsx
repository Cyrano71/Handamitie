import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./Home";
import { renderWithProviders } from "../../utils/utils-for-tests";
import Slide from "../../models/Slide";

describe("HomePage component", () => {
  test("renders nous contacter page", async () => {
    const routes = [
      {
        path: "/",
        element: <HomePage />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    //https://redux.js.org/usage/writing-tests
    //https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react-redux/#-how-to-perform-testing-with-the-react-redux-toolkit
    renderWithProviders(<RouterProvider router={router} />);

    const outputElement = screen.getByText("C'est par ici, venez.", {
      selector: "a",
    });
    expect(outputElement).toBeInTheDocument();
    expect(outputElement.getAttribute("href")).toBe("/nous_contacter");
  });
  test("renders nous contacter page", async () => {
    const routes = [
      {
        path: "/",
        element: <HomePage />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });

    const toCheck = "my custom data";
    renderWithProviders(<RouterProvider router={router} />, {
      preloadedState: {
        user: {
          slides: [],
          calendar: [toCheck],
        },
      },
    });

    const outputElement = screen.getByText(toCheck);
    expect(outputElement).toBeInTheDocument();
  });
});
