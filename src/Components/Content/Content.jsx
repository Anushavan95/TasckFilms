import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";


import Movies from './Movies/Movies'
import NavFilm from './NavFilm/NavFilm';
import Series from './Series/Series'
import { useLocation } from 'react-router';
import Footer from '../Footer/Footer';
export default function Content() {
 const location =   useLocation()
    return (
      <Fragment>
        <div className='content'>
      <Routes>
        <Route path={'/'} element={<NavFilm /> }/>
        <Route path={'/movies'} element={<Movies />} />
        <Route path={'/series'} element={  <Series />} />
      </Routes>
    
        </div>
  <Footer location={location} />
  </Fragment>
    )
}
