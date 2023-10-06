import React from 'react'
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom'
import PagePrincipal from '../Components/PagePrincipal'
import ShowMoreInfo from '../Components/ShowMoreInfo'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PagePrincipal />} />
                <Route path='/detalles/:id' element={<ShowMoreInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
