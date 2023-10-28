import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function MainNavigation() {
  return (
    <>
      <div id="menu">
        <nav>
          <ul>
            <motion.li
              whileHover={{ scale: [1, 1.05, 1.1] }}
              transition={{ type: "spring", stiffness: 250 }}
              className="imageLink"
            >
              <NavLink to="/" title="accueil" id="accueil" end>
                Accueil
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="imageLink"
            >
              <NavLink
                to="qui_sommes_nous"
                title="Qui sommes-nous ?"
                id="qui_sommes_nous"
              >
                Hand Amitie
              </NavLink>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="imageLink"
            >
              <NavLink
                to="nous_contacter"
                title="Nous contacter"
                id="nous_contacter"
              >
                Nous contacter
              </NavLink>
            </motion.li>
            <li className="imageLink">
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
