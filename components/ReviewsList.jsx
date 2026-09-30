import ReviewCard from "./ReviewCard"

export default function ReviewsList({bookList}){


    return(
    <>
    <section id="reviews">
        <div className="container">
            {bookList.reviews?.map((item)=>(
                <ReviewCard key={item.id} review={item}/>
            ))}
        </div>
    </section>
    </>
    )
}