

export default function ReviewCard({ review }) {


    return (

        <div className="card mb-3">
            <div className="card-body">
                <h3>{review.user}</h3>
                <p className="description"><strong>Rating :</strong> {review.rating}/5 </p>
                <p className="description"><strong>Review :</strong> {review.review}
                </p>
            </div>
        </div>

    )
}