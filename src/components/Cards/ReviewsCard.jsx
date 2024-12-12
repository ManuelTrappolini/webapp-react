

export default function ReviewCard({ review }) {


    return (

        <div className="card mb-3">
            <div className="card-body">
                <h3>{review.name}</h3>
                <p className="description"><strong>Rating :</strong> {review.vote}/5 </p>
                <p className="description"><strong>Review :</strong> {review.text}
                </p>
            </div>
        </div>

    )
}