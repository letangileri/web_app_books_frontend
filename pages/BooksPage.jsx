import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import BookCard from "../components/BookCard";
import BooksList from "../components/BooksList";
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
        <BooksList bookslist={books}/>
        </>
    )
}