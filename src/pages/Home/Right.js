import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const CALENDAR = [
  "samedi 23 et dimanche 24 septembre 2023 : week-end de début d'année",
  "samedi 7 octobre 2023",
  "dimanche 12 novembre 2023",
  "samedi 9 décembre 2023 : déjeuner de Noël",
  "samedi 13 janvier 2024 : journée portes ouvertes",
  "samedi 3 février 2024",
  "samedi 2 mars 2024",
  "samedi 27 avril 2024",
  "samedi 25 mai 2024",
  "samedi 8 juin 2024 : Fête d'Amitié de la paroisse",
  "samedi 29 et dimanche 30 juin 2024 : week-end de fin d'année",
];

export default function Right() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      className="right"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <div className="rightElement">
        <h1 id="rejoindre">Vous souhaitez nous rejoindre ?</h1>
        <motion.p>
          <NavLink to="/nous_contacter" className="red" end>
            C'est par ici, venez.
          </NavLink>
        </motion.p>
      </div>
      <div className="rightElement">
        <h1 className="red">Rencontres 2023-2024</h1>
        <motion.ul variants={container} initial="hidden" animate="show">
          {CALENDAR.map((date) => {
            return <motion.li variants={item}>{date}</motion.li>;
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
}
