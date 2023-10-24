import { NavLink } from "react-router-dom";

export default function Header(){
    return (
        <div id="header">
		<div class="right">
			<h1 class="imageLink">
            <NavLink
              to="/"
              title="accueil" 
              id="logo"
              end
            >
              Hand Amitie
            </NavLink>
            </h1>
		</div>
		<div class="left">
			<h1>Catéchèse</h1>
			<h2>pour adultes avec un handicap mental</h2>
		</div>
	</div>
    )
}