import React from 'react'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NavFilm() {
    return (
        <Container className='nav-mov'>
        <Link exact to='/series'> <div className='series'>Series</div></Link> 
        <Link exact to='/movies'> 
        <div className='movies'>
            Movies
        </div> 
        </Link>  
   
        </Container>
    )
}
