import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {

    return (

        <div className="card mb-3  col-5 ">
            <div className="card-body">
                <h3>{movie.title}</h3>
                <h5>By {movie.director}</h5>
                <p className="description"><strong>Year:</strong> {movie.release_year}</p>
                <p className="description"><strong>Genre:</strong> {movie.genre} </p>
                <p className="description"><strong>Description:</strong> {movie.abstract}</p>
                <Link to={`/movies/${movie.id}`}><button className="btn btn-danger"><span className="click-me">Click Me</span></button></Link>

            </div>
        </div >
    )
}