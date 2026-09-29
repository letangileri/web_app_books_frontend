import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from '../layouts/DefaultLayout'
import Header from '../components/Header'
import HomePage from '../components/pages/HomePage'
import BooksPage from '../components/pages/BooksPages'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout/>}>  
        <Route path='/' element={<HomePage/>}/>
        <Route path='/books' element={<BooksPage/>}/>
        <Route path='/books/:id' element={<h1> Book Page </h1>}/>
        <Route path='*' element={<h1> 404 Not found </h1>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
