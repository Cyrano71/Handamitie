import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hook";
import { selectCalendar } from "../../store/slice";

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
  const calendar = useAppSelector(selectCalendar);
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
          {calendar.map((date) => {
            return <motion.li key={date} variants={item}>{date}</motion.li>;
          })}
        </motion.ul>
      </div>
    </motion.div>
  );
}
