import { NavLink } from "react-router-dom";

export default function Header(){
  return (
    <div id="header">
      <div className="right">
        <h1 className="imageLink">
          <NavLink to="/" title="accueil" id="logo" end>
            Hand Amitie
          </NavLink>
        </h1>
      </div>
      <div className="left">
        <h1>Catéchèse</h1>
        <h2>pour adultes avec un handicap mental</h2>
      </div>
    </div>
  );
};