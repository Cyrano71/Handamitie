import { NavLink } from "react-router-dom";

export default function Right() {
  return (
    <div class="right">
      <div class="rightElement">
        <h1 id="rejoindre">Vous souhaitez nous rejoindre ?</h1>
        <p>
        <NavLink
              to="/nous_contacter"
              className="red"
              end
            >
                C'est par ici, venez.
            </NavLink>
        </p>
      </div>
      <div class="rightElement">
        <h1 class="red">Rencontres 2023-2024</h1>
        <ul>
          <li>
            samedi 23 et dimanche 24 septembre 2023 : week-end de début d'année
          </li>
          <li>samedi 7 octobre 2023</li>
          <li>dimanche 12 novembre 2023</li>
          <li>samedi 9 décembre 2023 : déjeuner de Noël </li>
          <li>samedi 13 janvier 2024 : journée portes ouvertes</li>
          <li>samedi 3 février 2024</li>
          <li>samedi 2 mars 2024</li>
          <li>samedi 27 avril 2024</li>
          <li>samedi 25 mai 2024</li>
          <li>samedi 8 juin 2024 : Fête d'Amitié de la paroisse</li>
          <li>samedi 29 et dimanche 30 juin 2024 : week-end de fin d'année</li>
        </ul>
      </div>
    </div>
  );
}
