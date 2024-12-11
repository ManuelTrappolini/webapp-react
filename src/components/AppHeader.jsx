import { NavLink } from "react-router-dom"

export default function AppHeader() {

    return (
        <header>
            <NavLink className="text-decoration-none" to='/'>  <img src='./images/boolmovies.png' alt="" /></NavLink>
        </header>
    )
}