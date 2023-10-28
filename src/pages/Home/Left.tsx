import { Slide as SlideShow } from "react-slideshow-image";
import Slide from "../../models/Slide";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hook";
import { selectSlides } from "../../store/slice";

const convertToJsx = (slide: Slide) => {
  return (
    <>
    {slide.paragraphs.map((item) => <p>{item}</p>)}
    <p id="signature" className="blue">
      {slide.id}
    </p>
    </>

  );
};

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
            <div key={index} className="mask">
              <div id="box">
                <div className="global" id={slideImage.id}>
                  <p className="img">
                    {slideImage.resize && (
                      <img
                        src={slideImage.image}
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                    )}
                    {!slideImage.resize && (
                      <img src={slideImage.image} alt="" />
                    )}
                  </p>
                  {convertToJsx(slideImage)}
                </div>
              </div>
            </div>
          ))}
        </SlideShow>
      </div>
    </motion.div>
  );
}
