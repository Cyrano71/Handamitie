import { createSlice } from "@reduxjs/toolkit";
import MarieLaure from "../assets/png/marie_laure.png";
import Handamitie from "../assets/png/hand_amitie.png";
import Tristan from "../assets/png/tristan.png";
import Maxime from "../assets/png/maxime.png";
import Anne from "../assets/png/anne1.png";
import WeekendImage from "../assets/png/weekend_240923.jpeg";
import { RootState } from ".";
import Slide from "../models/Slide";

// Define a type for the slice state
interface sliceState {
  slides: Slide[];
  calendar: string[];
}

// Define the initial state using that type
const initialState: sliceState = {
  slides: [],
  calendar: [],
};

export const slice = createSlice({
  name: "handamitie",
  initialState,
  reducers: {
    initData(state) {
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
        new Slide(
          "",
          WeekendImage,
          "Slide 0",
          ["Weekend Handmitié à Massabielle à Saint Prix dans le 95"],
          true
        ),
        new Slide("Marie-Laure", MarieLaure, "Slide 1", [
          "On y vient pour :",
          "Rencontrer d'autres personnes",
          "Réfléchir sur une lecture, une parabole",
          "Faire une activité par rapport à ce qu'on a lu avant",
          "Et surtout pour prier ensemble",
          "Les fleurs sont les amis et les animateurs.",
          "Le soleil c'est Dieu",
          "L'arbre c'est le père Ganiteau",
          "Les nuages sont les autres prêtres de la paroisse",
        ]),
        new Slide(
          "Chantal, Agnès, Jean-François, Babeth, Florence",
          Handamitie,
          "Slide 2"
        ),
        new Slide("François", "", "Slide 3", [
          "Rencontres entre amis catholiques à la paroisse de l'Immaculée \
      Conception dans le 12ème avec l'aide de jeunes animateurs et des \
      aperçus spirituels donnés par un prêtre.",
          "Des sorties, vivre des temps forts pendant un week-end.",
          "Fondée à la suite des Journées Mondiales de la Jeunesse de 2000.",
          " La joie de recevoir une invitation indiquant le thême de la \
      prochaine fois, parfois des ateliers concrets comme réaliser du \
      pain. Revoir les anciens lors de la journée des familles.",
        ]),
        new Slide("Tristan", Tristan, "Slide 4", [
          "Hand Amitié, j'aime la prière et la messe. J'aime les jeux.\
      J'aime aussi quand on chante des paraboles.",
        ]),
        new Slide("Geoffroy", "", "Slide 5", [
          " Une association accueillante où il fait bon vivre. Un groupe \
      très uni. On fait des activités diverses et variées dans la joie \
      et la bonne humeur !",
          " Depuis que je suis arrivé dans cette association, j'ai trouvé du \
    bonheur. N'hésitez pas à venir, vous y trouverez de bonnes \
    choses.",
        ]),
        new Slide("Maxime", Maxime, "Slide 6"),
        new Slide("Anne", Anne, "Slide 7"),
      ];
    },
  },
});

export const storeActions = slice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectSlides = (state: RootState) => state.user.slides;
export const selectCalendar = (state: RootState) => state.user.calendar;
export default slice.reducer;