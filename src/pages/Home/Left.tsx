import { Slide as SlideShow } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hook";
import { selectSlides } from "../../store/slice";
import SlideLayout from "../../components/SlideLayout";

export default function Left() {
  const slideImages = useAppSelector(selectSlides);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
      className="left"
    >
      <h1 className="blue">Hand Amitié vue par les amis</h1>
      <div className="slide-container">
        <SlideShow>
          {slideImages.map((slideImage, index) => (
            <SlideLayout item={slideImage} index={index} />
          ))}
        </SlideShow>
      </div>
    </motion.div>
  );
}
