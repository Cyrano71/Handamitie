import MarieLaure from "../../assets/png/marie_laure.png";
import Handamitie from "../../assets/png/hand_amitie.png";
import Tristan from "../../assets/png/tristan.png";
import Maxime from "../../assets/png/maxime.png";
import Anne from "../../assets/png/anne1.png";
import WeekendImage from "../../assets/png/weekend_240923.jpeg";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";

const slideImages = [
  {
    image: WeekendImage,
    caption: "Slide 0",
    id: "",
    resize: true,
    jsx: (
      <>
        <p>Weekend Handmitié à Massabielle à Saint Prix dans le 95</p>
      </>
    ),
  },
  {
    image: MarieLaure,
    caption: "Slide 1",
    id: "",
    jsx: (
      <>
        <p>On y vient pour :</p>
        <ul id="laurre">
          <p>Rencontrer d'autres personnes</p>
          <p>Réfléchir sur une lecture, une parabole</p>
          <p>Faire une activité par rapport à ce qu'on a lu avant</p>
          <p>Et surtout pour prier ensemble</p>
        </ul>
        <p>Les fleurs sont les amis et les animateurs.</p>
        <p>Le soleil c'est Dieu</p>
        <p>L'arbre c'est le père Ganiteau</p>
        <p>Les nuages sont les autres prêtres de la paroisse</p>
        <p id="signature" className="blue">
          Marie-Laure
        </p>
      </>
    ),
  },
  {
    image: Handamitie,
    caption: "Slide 2",
    id: "chantal",
    jsx: (
      <>
        <p id="signature" className="blue">
          Chantal, Agnès, Jean-François, Babeth, Florence
        </p>
      </>
    ),
  },
  {
    image: "",
    caption: "Slide 3",
    id: "francois",
    jsx: (
      <>
        <p>
          Rencontres entre amis catholiques à la paroisse de l'Immaculée
          Conception dans le 12ème avec l'aide de jeunes animateurs et des
          aperçus spirituels donnés par un prêtre.
        </p>
        <p>Des sorties, vivre des temps forts pendant un week-end.</p>
        <p>Fondée à la suite des Journées Mondiales de la Jeunesse de 2000.</p>
        <p>
          La joie de recevoir une invitation indiquant le thême de la prochaine
          fois, parfois des ateliers concrets comme réaliser du pain. Revoir les
          anciens lors de la journée des familles.
        </p>
        <p id="signature" className="blue">
          François
        </p>
      </>
    ),
  },
  {
    image: Tristan,
    caption: "Slide 4",
    id: "tristan",
    jsx: (
      <>
        <p>
          Hand Amitié, j'aime la prière et la messe. J'aime les jeux. J'aime
          aussi quand on chante des paraboles.
        </p>
        <p id="signature" className="blue">
          Tristan
        </p>
      </>
    ),
  },
  {
    image: "",
    caption: "Slide 5",
    id: "geoffroy",
    jsx: (
      <>
        <p>
          Une association accueillante où il fait bon vivre. Un groupe très uni.
          On fait des activités diverses et variées dans la joie et la bonne
          humeur !
        </p>
        <p>
          Depuis que je suis arrivé dans cette association, j'ai trouvé du
          bonheur. N'hésitez pas à venir, vous y trouverez de bonnes choses.
        </p>
        <p id="signature" className="blue">
          Geoffroy
        </p>
      </>
    ),
  },
  {
    image: Maxime,
    caption: "Slide 6",
    id: "maxime",
    jsx: (
      <>
        <p id="signature" className="blue">
          Maxime
        </p>
      </>
    ),
  },
  {
    image: Anne,
    caption: "Slide 7",
    id: "anne",
    jsx: (
      <>
        <p id="signature" className="blue">
          Anne
        </p>
      </>
    ),
  },
];

export default function Left() {
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
                  {slideImage.jsx}
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </motion.div>
  );
}
