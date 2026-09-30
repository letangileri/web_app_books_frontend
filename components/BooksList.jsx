import BookCard from "./BookCard"

export default function BookList({bookslist}){

    return(
        <>
        <section className="mb-4">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {bookslist.map((item)=>(
                       <BookCard key={item.id} item={item}/>
                    ))}


                </div>
                <div className="text-center">
                    <button className="btn btn-dark mt-5">Load More Books</button>
                </div>
            </div>
            
        </section>
        </>
    )
}