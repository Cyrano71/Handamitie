import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Header from "../components/Header";

function RootLayout() {
  return (
    <>
      <div id="bordure">
        <div className="center">
          <Header />
          <MainNavigation />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <div id="footer"> </div>
    </>
  );
}

export default RootLayout;
