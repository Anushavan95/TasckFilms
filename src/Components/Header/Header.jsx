import { Container } from '@mui/material'
import React from 'react'

export default function Header() {
    return (
        <header className='header'>
        
            <div className='first-header'>
            <Container >

        <div className='title'>
           <h1>DEMO Streaming</h1>
           </div> 
           <div className='right-header-block'>
               <button className='log-in'>Log in</button>
               <button className='start'>Start your free trial</button>
            </div> 
            </Container>
            </div>
           
            <div className='second-header'>
                <Container>
                <h2 className='popular-titles'>Popular Titles</h2>
                </Container>
            </div>
        </header>
    )
}
