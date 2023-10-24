import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <>
      <div id="menu">
        <nav>
          <ul>
            <li class="imageLink">
              <NavLink to="/" title="accueil" id="accueilSel" end>
                Accueil
              </NavLink>
            </li>
            <li class="imageLink">
              <NavLink
                to="qui_sommes_nous"
                title="Qui sommes-nous ?"
                id="qui_sommes_nous"
              >
                Hand Amitie
              </NavLink>
            </li>
            <li class="imageLink">
              <NavLink
                to="nous_contacter"
                title="Nous contacter"
                id="nous_contacter"
              >
                Nous contacter
              </NavLink>
            </li>
            <li class="imageLink">
              <NavLink to="jmj" title="JMJ" id="jmj">
                JMJ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainNavigation;
