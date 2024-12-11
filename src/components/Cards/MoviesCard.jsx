import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {

    return (

        <div className="card mb-3">
            <div className="card-body">
                <h3>{movie.title}</h3>
                <h5>By {movie.director}</h5>
                <h5>Year: {movie.year}</h5>
                <h5>Genre: {movie.genre} </h5>
                <p className="description"><strong>Description:</strong> {movie.plot}</p>
                <Link to={`/movies/${movie.id}`}><button className="btn btn-primary">Click Me</button></Link>

            </div>
        </div>
    )
}