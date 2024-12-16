import { useParams } from "react-router-dom"
import ReviewCard from "../components/Cards/ReviewsCard"
import Banner from "../components/Banner"
import { useState, useEffect, useContext } from "react"
import ReviewFormCard from "../components/Cards/ReviewFormCard"
import GlobalContext from "../context/GlobalContext"
import Loader from '../components/Loader'

export default function SingleMovie() {

    const { id } = useParams()
    const { loading, setLoading } = useContext(GlobalContext)

    /* const reviews = [
        {
            "id": 1,
            "user": "Alice",
            "rating": 5,
            "review": "Un capolavoro della fantascienza, con una trama intricata e affascinante. Nolan mescola perfettamente azione, filosofia e emozione in un film che lascia senza fiato."
        },
        {
            "id": 2,
            "user": "Bob",
            "rating": 5,
            "review": "Un film che ha definito un'intera generazione. La sua fusione di tecnologia e filosofia, unita a scene d'azione incredibili, lo rende ancora uno dei migliori film di fantascienza di tutti i tempi."
        },
        {
            "id": 3,
            "user": "Charlie",
            "rating": 5,
            "review": "Un film senza tempo che racconta la storia di potere, lealtà e tradimento. L'interpretazione di Marlon Brando è leggendaria e la regia di Coppola è impeccabile."
        },
        {
            "id": 4,
            "user": "Diana",
            "rating": 5,
            "review": "Un racconto emozionante di speranza e amicizia. La performance di Tim Robbins e Morgan Freeman è straordinaria, e il finale è uno dei più belli di sempre."
        },
        {
            "id": 5,
            "user": "Eva",
            "rating": 4.5,
            "review": "Un film innovativo che ha rivoluzionato il cinema degli anni '90. I dialoghi brillanti di Tarantino, uniti a una narrazione non lineare, creano un'esperienza unica e coinvolgente."
        },
        {
            "id": 6,
            "user": "Frank",
            "rating": 5,
            "review": "Un film che emoziona e ispira. Tom Hanks dà una delle sue migliori performance, raccontando una storia di vita che è sia tragica che bellissima."
        },
        {
            "id": 7,
            "user": "George",
            "rating": 5,
            "review": "Un film di supereroi che trascende il genere. Il Joker di Heath Ledger è un'interpretazione iconica e la trama è ricca di tensione, con una riflessione profonda su giustizia e moralità."
        },
        {
            "id": 8,
            "user": "Helen",
            "rating": 4.5,
            "review": "Un film visivamente stupefacente e filosoficamente profondo. Nolan esplora temi complessi come il tempo, l'amore e la sopravvivenza, con una colonna sonora indimenticabile di Hans Zimmer."
        },
        {
            "id": 9,
            "user": "Ian",
            "rating": 5,
            "review": "Un film provocatorio che sfida le convenzioni sociali e culturali. Le performance di Brad Pitt e Edward Norton sono incredibili, e la trama lascia una riflessione profonda sulla natura umana."
        },
        {
            "id": 10,
            "user": "Julia",
            "rating": 4.5,
            "review": "Un epico viaggio di vendetta e onore. Russell Crowe dà una performance potente e la regia di Ridley Scott cattura magnificamente l'epoca romana. Un film che coinvolge e appassiona."
        }
    ] */
    const [movie, setMovie] = useState(null)
    const [success, setSuccess] = useState(null)

    function fetchData(api_movies_url = `http://localhost:3002/movies/${id}`) {
        setLoading(true)

        fetch(api_movies_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setMovie(data)

                setLoading(false)
            })
    }

    useEffect(fetchData, [success])



    return (
        <>
            {loading ? <Loader /> : (
                <>
                    {movie && (
                        <Banner
                            title={movie.title}
                            subtitle={'By ' + movie.director}
                            leadtext={movie.abstract}
                        />
                    )}

                    <ReviewFormCard movie_id={id} />
                    <div className="Reviews">
                        <div className="container">


                            {movie && movie.reviews && movie.reviews.length > 0 ? (
                                movie.reviews.map(review => <ReviewCard key={review.id} review={review} />)
                            ) : (
                                <p>No reviews available.</p>)}

                        </div>
                    </div>

                </>
            )}
        </>
    )

}