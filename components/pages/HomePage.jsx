import { Link } from "react-router-dom"

export default function HomePage (){
    return(
        <>
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container py-5">
                <h1 className="display-4 fw-bold">Welcome to our Books Reviews App</h1>
                <p className="col-md-8 fs-4 lead">
                    Our app offers a wide selection of books across various genres.
                </p>
                <Link className="btn btn-primary btn-lg" to="/books" role="button">
                    View Books
                </Link>
            </div>
        </div>
        <section className="mb-4">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <Link to="/books/2">
                            <img className="card-img-top" src="https://placehold.co/600x400?text=Il+nome+della+rosa" alt="Il nome della rosa book" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Il nome della rosa
                                </h5>
                                <div className="my-2"><i className="bi bi-person-badge"></i>Author name</div>
                                <Link className="btn btn-dark" to="/books/2">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <Link to="/books/3">
                            <img className="card-img-top" src="https://placehold.co/600x400?text=1984" alt="1984 book" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    1984
                                </h5>
                                <div className="my-2"><i className="bi bi-person-badge"></i>Author name</div>
                                <Link className="btn btn-dark" to="/books/3">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <Link to="/books/4">
                            <img className="card-img-top" src="https://placehold.co/600x400?text=Orgoglio+e+pregiudizio" alt="Orgoglio e pregiudizio book" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Orgoglio e pregiudizio
                                </h5>
                                <div className="my-2"><i className="bi bi-person-badge"></i>Author name</div>
                                <Link className="btn btn-dark" to="/books/4">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
        </>
    )
}