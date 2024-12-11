import { Link } from "react-router-dom"

export default function AppHeader() {

    return (
        <header>
            <Link className="text-decoration-none" to='/'>  <img src='./images/boolmovies.png' alt="" /></Link>
        </header>
    )
}