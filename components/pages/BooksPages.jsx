import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const API_URL = 'http://localhost:3000/api/books';

export default function BooksPage (){

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        axios.get(API_URL)
        .then(res => {
            console.log(res);
            console.log(res.data.books);
            setBooks(res.data.books)
            
        })
        .catch(err => {
            console.error(err)
        })
    },[])
    

    return(
        <>
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container py-5">
                <h1 className="display-4 fw-bold">Books collection</h1>
                <p className="col-md-8 fs-4 lead">
                    View all our books and reviews in one place!
                </p>
            </div>
        </div>
        <section className="mb-4">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {books.map((item)=>(
                    <div className="col" key={item.id}>
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