import { Link } from 'react-router-dom'

export default function Footer(){

    const menu = [
        {id:1, name:'Home', link:'/'},
        {id:2, name:'Books' , link:'/books'},
        {id:3, name:'Admin', link:'/admin'}
    ]

    const legalMenu = [
        {id:1, name:'Privacy Policy', link:'/privacy'},
        {id:2, name:'Terms of service', link:'/terms'}

    ]

    return(
        <>
        <footer className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="logo">
                            <i className="bi bi-journal-richtext"></i>
                        </div>
                        <p>&copy; 2026 My Books</p>
                    </div>
                    <div className="col">
                        <h4>Quick link</h4>
                        <ul className="list-unstyled">

                        {menu.map((item)=>(
                            <li key={item.id}>
                                <Link to = {item.link}>{item.name}</Link>
                            </li> 
                        ))}
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Contact us</h4>
                        <ul className="list-unstyled">
                            {legalMenu.map((item)=>(
                                <li key={item.id}>
                                    <Link to = {item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}