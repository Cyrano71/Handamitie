import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const convertToJsx = (slide) => {
  return (
    <>
    {slide.jsx.p.map((item) => <p>{item}</p>)}
    <p id="signature" className="blue">
      {slide.id}
    </p>
    </>

  );
};

export default function Left() {
  const slideImages = useSelector((state) => state.slides);
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
        <Slide>
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
        </Slide>
      </div>
    </motion.div>
  );
}
