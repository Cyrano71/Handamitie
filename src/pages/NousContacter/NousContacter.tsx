import {motion} from "framer-motion"

export default function NousContacter() {
  return (
    <motion.div id="main" 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    transition={{
      duration: 1,
    }}>
      <div className="left">
        <h1 className="pink">Pour nous joindre</h1>
        <ul className="contact">
          <li>Vous souhaitez nous rejoindre ?</li>
          <li>Vous avez des questions concernant Hand Amitié ?</li>
          <li>N'hésitez pas à nous contacter</li>
        </ul>

        <p className="contact">
          <span className="pink">Email</span> - handamitie@gmail.com
        </p>
        <p className="contact">
          <span className="pink">Responsable</span> - Axelle : 06 41 09 15 66
        </p>
      </div>
    </motion.div>
  );
}
