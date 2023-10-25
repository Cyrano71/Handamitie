import { motion } from "framer-motion";
export default function Top() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{
        duration: 1,
      }}
    >
      <p id="top">
        Se retrouver le temps d'une rencontre, nouer des amitiés, découvrir
        Dieu, se laisser surprendre, prendre le goûter, aller à Lisieux, Lourdes
        ou Rome, aller à Lisbonne aux JMJ ou partager une messe.
        <br /> Voilà un petit peu de Hand Amitié.
      </p>
    </motion.div>
  );
}
