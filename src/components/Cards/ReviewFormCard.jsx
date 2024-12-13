import { useState } from "react"



export default function ReviewFormCard({ movie_id }) {

    const [name, setName] = useState('')
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [success, setSuccess] = useState(null)


    function HandleFormSubmit(e) {



        if (name.length < 5 || review.length < 5 || rating == 0) {
            setErrorMessage('Please fill all fields correctly')
            return;
        }

        const formData = {
            name,
            text: review,
            vote: rating
        }

        console.log(formData);


        const base_book_api_url = `http://localhost:3002/movies/${movie_id}/review`

        fetch(base_book_api_url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())

            .then(data => {
                console.log(data);


                if (data.success) {
                    setSuccess('Thanks for your Review')

                }
            })
            .catch(err => console.log(err));


        setName('')
        setReview('')
        setRating(0)

    }

    function HandleFormToggle() {
        document.getElementById('form-card').classList.toggle('d-none')

    }




    return (
        <>


            <h3>Review</h3>
            <div className="container">
                {success && <div>{success}</div>}


                <button onClick={HandleFormToggle} className="btn btn-danger mb-3">Leave your Review</button>

                <div id="form-card" className="card mb-3 d-none">
                    <h3 className="card-body">Leave Your Review</h3>

                    <div className="card-body">
                        <div className="mb-3">


                            <form onSubmit={HandleFormSubmit}>
                                <label htmlFor="username">User Name</label>
                                <input name="name" id="name" type="text" className="form-control mb-3" placeholder="Insert Your Name Here" value={name} onChange={(e) => setName(e.target.value)} />
                                <div className="rating mb-3 text-warning">
                                    {[1, 2, 3, 4, 5].map(star => <i key={star} className={`bi bi-star${star <= rating ? '-fill' : ''}`} onClick={() => setRating(star)} ></i>)}
                                </div>


                                <textarea className="form-control mb-3 mt-3" name="review" id="review" placeholder="Leave Your Review Here" value={review} onChange={(e) => setReview(e.target.value)}></textarea>

                                <button type="submit" className="btn btn-danger">Submit</button>
                                {errorMessage && <span className="text-danger"> ❌ {errorMessage}</span>}
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}