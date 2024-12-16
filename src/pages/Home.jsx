import MovieCard from "../components/Cards/MoviesCard"
import Banner from "../components/Banner"
import { useState, useEffect, useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import Loader from '../components/Loader'


export default function HomePage() {

    const { loading, setLoading } = useContext(GlobalContext)

    /*     const movies = [

            {
                "id": 1,
                "title": "Inception",
                "year": 2010,
                "director": "Christopher Nolan",
                "genre": "Sci-Fi, Thriller",
                "plot": "Dom Cobb è un ladro esperto nell'arte dell'estrazione, ovvero il furto di idee dal subconscio durante il sonno. Accetta una missione rischiosa per impiantare un'idea nella mente di un individuo, un processo noto come 'inception'. Ma le linee tra sogno e realtà iniziano a confondersi, mettendo a rischio la sua vita e quella della sua squadra."
            },
            {
                "id": 2,
                "title": "The Godfather",
                "year": 1972,
                "director": "Francis Ford Coppola",
                "genre": "Crime, Drama",
                "plot": "La storia della famiglia Corleone, una delle famiglie mafiose più potenti di New York. Dopo un attentato al patriarca Vito Corleone, suo figlio Michael si trova coinvolto nelle operazioni criminali della famiglia, nonostante inizialmente volesse rimanere lontano dalla malavita. Un dramma di potere, lealtà e vendetta."
            },
            {
                "id": 3,
                "title": "Pulp Fiction",
                "year": 1994,
                "director": "Quentin Tarantino",
                "genre": "Crime, Drama",
                "plot": "Un intreccio di storie che ruotano attorno a Vincent Vega e Jules Winnfield, due hitmen che lavorano per un boss della mafia, Marsellus Wallace. La pellicola mescola violenza, umorismo nero e dialoghi indimenticabili in un'epopea che esplora il destino e le scelte morali di ciascun personaggio."
            },
            {
                "id": 4,
                "title": "Forrest Gump",
                "year": 1994,
                "director": "Robert Zemeckis",
                "genre": "Drama, Romance",
                "plot": "Forrest Gump è un uomo dal cuore puro, ma con un QI basso, che vive eventi straordinari durante la sua vita, tra cui la guerra del Vietnam, il business del gamberetto e una storia d'amore con Jenny, la sua infanzia e l'amore della sua vita. La sua innocenza e la sua determinazione lo portano a diventare una leggenda."
            },
            {
                "id": 5,
                "title": "The Dark Knight",
                "year": 2008,
                "director": "Christopher Nolan",
                "genre": "Action, Crime, Drama",
                "plot": "Batman affronta una nuova minaccia nella forma del Joker, un criminale anarchico che vuole distruggere Gotham City e portare il caos nel cuore della città. Mentre la battaglia tra il bene e il male si intensifica, Batman deve fare sacrifici morali e personali per proteggere la città."
            },
            {
                "id": 6,
                "title": "Interstellar",
                "year": 2014,
                "director": "Christopher Nolan",
                "genre": "Sci-Fi, Adventure, Drama",
                "plot": "In un futuro distopico, un gruppo di astronauti, guidati da Cooper, un ex pilota della NASA, esplora una serie di buchi neri e pianeti lontani alla ricerca di una nuova casa per l'umanità. Il film esplora temi di amore, sacrificio e la lotta per la sopravvivenza, mentre affronta la teoria della relatività e i misteri dell'universo."
            },
            {
                "id": 7,
                "title": "Fight Club",
                "year": 1999,
                "director": "David Fincher",
                "genre": "Drama",
                "plot": "Un uomo senza nome vive una vita monotona e senza scopo, fino a quando incontra Tyler Durden, un uomo carismatico che lo introduce al Fight Club, un gruppo di uomini che si riuniscono per combattere come una forma di purificazione e liberazione. La storia si sviluppa in un'esplosiva critica alla società dei consumi."
            },
            {
                "id": 8,
                "title": "Gladiator",
                "year": 2000,
                "director": "Ridley Scott",
                "genre": "Action, Drama",
                "plot": "Massimo Decimo Meridio, un generale romano tradito, viene ridotto in schiavitù e costretto a diventare un gladiatore. Con il tempo, guadagna fama nell'arena e cerca vendetta contro l'imperatore Commodo, che ha assassinato la sua famiglia. Un epico viaggio di redenzione e giustizia."
            }
        ] */



    const [movies, setMovies] = useState([])


    function fetchData(api_movies_url = 'http://localhost:3002/movies') {


        setLoading(true)


        fetch(api_movies_url)
            .then(res => res.json())
            .then(data => {

                console.log(data);
                setMovies(data.movies)

                setLoading(false)
            })
    }

    useEffect(fetchData, [])






    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <Banner title="Homepage" subtitle="The Best Community of Movies in the World " />
                    <div className="homepage">
                        <div className="container">


                            {
                                movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                            }

                        </div>
                    </div>
                </>
            )
            }

        </>


    )
}