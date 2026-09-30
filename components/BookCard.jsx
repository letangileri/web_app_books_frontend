import { Link } from "react-router-dom"



export default function BookCard ({item}){

    return(
        <>
        <div className="col">
            <div className="card">
                <Link to={`/books/${item.id}`}>
                <img className="card-img-top" src={item.cover_image} alt={item.title} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                        {item.title}
                    </h5>
                    <div className="my-2"><i className="bi bi-person-badge"></i>{item.author}</div>
                    <Link className="btn btn-dark" to={`/books/${item.id}`}>View Details</Link>
                </div>
            </div>
        </div>
        </>
    )
}