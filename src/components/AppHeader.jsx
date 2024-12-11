import { Link } from "react-router-dom"

export default function AppHeader() {

    return (
        <header>
            <Link className="text-decoration-none" to='/'>  <h1 className="text-decoration-none text-white">Bool Movies</h1></Link>
        </header>
    )
}