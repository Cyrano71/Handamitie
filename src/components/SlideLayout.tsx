import Slide from "../models/Slide";

const convertTextToJsx = (slide: Slide) => {
  return (
    <>
      {slide.paragraphs.map((item) => (
        <p>{item}</p>
      ))}
      <p id="signature" className="blue">
        {slide.id}
      </p>
    </>
  );
};

const SlideLayout: React.FC<{ item: Slide; index: number }> = (props) => {
  const slide = props.item;
  return (
    <div key={props.index} className="mask">
      <div id="box">
        <div className="global" id={slide.id}>
          <p className="img">
            {slide.resize && (
              <img
                src={slide.image}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            )}
            {!slide.resize && <img src={slide.image} alt="" />}
          </p>
          {convertTextToJsx(slide)}
        </div>
      </div>
    </div>
  );
};

export default SlideLayout;
