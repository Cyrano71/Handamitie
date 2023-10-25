import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home/Home";
import RootLayout from "./pages/Root";
import QuiSommesNous from "./pages/QuiSommesNous/QuiSommesNous";
import NousContacter from "./pages/NousContacter/NousContacter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handamitieActions } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "qui_sommes_nous",
        element: <QuiSommesNous />,
      },
      {
        path: "nous_contacter",
        element: <NousContacter />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handamitieActions.initData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
