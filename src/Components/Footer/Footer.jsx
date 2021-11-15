import React from 'react'
import { Box } from '@mui/system';
import { Container, Grid, Link, List, ListItem, Typography } from '@mui/material';
import Windows from '../../Assets/windows-store.svg'
import AppStore from '../../Assets/app-store.svg'
import Google from '../../Assets/play-store.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer({location}) {
    return (
        <footer className={`footer ${location.pathname !== '/' ? 'static-bottom':''}`}>
        <Container>
            <Box>
             <nav className='footer-nav-menu'>
                <List className="lists">
                <ListItem><Link to="/Home">Home</Link></ListItem>

                    <ListItem><Link to="/Home">Teams and Conditions</Link></ListItem>
                    <ListItem><Link to="/Home">Privacy  Policy</Link></ListItem>
                    <ListItem><Link to="/Home">Collection Statement</Link></ListItem>
                    <ListItem><Link to="/Home">Help</Link></ListItem>
                    <ListItem><Link to="/Home">Manage  Account</Link></ListItem>
                </List>
            </nav>
            <Typography className='demo-text-footer'>Copyright 2016 DEMO Streaming. All Rights Reserved.</Typography>
            </Box>
            <Grid className='footer-box-icons'>
                <Box className='social-icons'>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            </Box>
            <Box className='icons-box'>


           <img src={Windows} alt={'Windows'} className='win' />
           <img src={AppStore} alt={'AppStore'} className='app' />
           <img src={Google} alt={'Google'} className='play' />

            </Box>
            </Grid>
            </Container>
        </footer>
    )
}
