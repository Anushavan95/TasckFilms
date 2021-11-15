import { Container, Box, CardActionArea,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesAsync, selectMovies } from '../../../redux/slices/movies'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Loader from "react-js-loader";


export default function Series() {
    const dispatch = useDispatch()

    const [seriesState, setSeries] = useState([])
    const [loadingState, setLoading] = useState(true)

    function fillterSeries (series) {
      const element = series.filter((item )=> {
        return item.programType ===  'series'  && item.releaseYear >= 2010
      })
      element.splice(0, 21)
      setSeries(element)
      setLoading(false)
    }

    useEffect(() => {
      dispatch(getMoviesAsync()).then(res => {
        fillterSeries(res.payload.entries)
      })
    }, [dispatch])

    return (
        <Container className='container'>
            {seriesState?.sort((a, b) => (a.title > b.title) ? 1 : -1).map((item, index) => {
                return ( 
                <Box key={index} > 
                   <Card sx={{ maxWidth: 250 }}>
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
                <Typography>Program Series</Typography>  

                  </Box>
                  )
            })}   
          {
            loadingState ? ( <Box className='loader'> <Loader type="bubble-loop" bgColor={"#017fff"} title={"Loading"} color={'black'} size={100} /></Box>) : <Typography>Oops, something went  wrong</Typography>
          }
        </Container>
    )
}
