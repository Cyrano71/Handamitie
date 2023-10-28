import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home/Home";
import RootLayout from "./pages/Root";
import QuiSommesNous from "./pages/QuiSommesNous/QuiSommesNous";
import NousContacter from "./pages/NousContacter/NousContacter";
import { useEffect } from "react";
import { storeActions } from "./store/slice";
import { useAppDispatch } from "./store/hook";

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
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(storeActions.initData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
