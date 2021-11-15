import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesAsync, selectMovies } from '../../../redux/slices/movies'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Box } from '@mui/material';
import Loader from "react-js-loader";


export default function Movies() {
const [moviesState, setMovies] = useState([])
const dispatch = useDispatch()
const movies = useSelector(selectMovies)

const [loadingState, setLoading] = useState(true)
function filterMovies (movies) {
   

    const element = movies.filter((item )=> {
           return item.programType ===  'movie' && item.releaseYear >=2010
       })
       setMovies(element)
    }
    

    useEffect(() => {
        dispatch(getMoviesAsync()).then(res => {
          filterMovies(res.payload.entries)
        })
    }, [dispatch])

 

return (
        <Container className="container">
            {moviesState?.sort((a, b) => (a.title > b.title) ? 1 : -1).map(item => {
                 return (
                  <Box> 
                  <Card sx={{ maxWidth: 250,}} >
                   <CardActionArea>
                     <CardMedia
                       component="img"
                       image={item.images['Poster Art'].url}
                       alt="green iguana"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                         {item.title}
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                        {item.releaseYear} {item.programType}
                       </Typography>
                     </CardContent>
                   </CardActionArea>

                 </Card>
               <Typography>Program Movies</Typography>  

                 </Box>
                 )
            })}
            {
            loadingState ? ( <Box className='loader'> <Loader type="bubble-loop" bgColor={"#017fff"} title={"Loading"} color={'black'} size={100} /></Box>) : <Typography>Oops, something went  wrong</Typography>
          }
         
        </Container>
    )
}
