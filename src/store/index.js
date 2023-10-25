import { createSlice, configureStore } from "@reduxjs/toolkit";
import MarieLaure from "../assets/png/marie_laure.png";
import Handamitie from "../assets/png/hand_amitie.png";
import Tristan from "../assets/png/tristan.png";
import Maxime from "../assets/png/maxime.png";
import Anne from "../assets/png/anne1.png";
import WeekendImage from "../assets/png/weekend_240923.jpeg";

const handamitieSlice = createSlice({
  name: "handamitie",
  initialState: {
    slides: [],
    calendar: [],
  },
  reducers: {
    initData(state, actions) {
      state.calendar = [
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
      state.slides = [
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
              <p>
                Fondée à la suite des Journées Mondiales de la Jeunesse de 2000.
              </p>
              <p>
                La joie de recevoir une invitation indiquant le thême de la
                prochaine fois, parfois des ateliers concrets comme réaliser du
                pain. Revoir les anciens lors de la journée des familles.
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
                Hand Amitié, j'aime la prière et la messe. J'aime les jeux.
                J'aime aussi quand on chante des paraboles.
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
                Une association accueillante où il fait bon vivre. Un groupe
                très uni. On fait des activités diverses et variées dans la joie
                et la bonne humeur !
              </p>
              <p>
                Depuis que je suis arrivé dans cette association, j'ai trouvé du
                bonheur. N'hésitez pas à venir, vous y trouverez de bonnes
                choses.
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
    },
  },
});

const store = configureStore({reducer : handamitieSlice.reducer})
export default store;
export const handamitieActions = handamitieSlice.actions;