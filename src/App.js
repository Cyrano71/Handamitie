import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home/Home';
import RootLayout from './pages/Root';
import QuiSommesNous from './pages/QuiSommesNous/QuiSommesNous';
import NousContacter from './pages/NousContacter/NousContacter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "qui_sommes_nous",
        element: <QuiSommesNous/>
      },
      {
        path: "nous_contacter",
        element: <NousContacter/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
