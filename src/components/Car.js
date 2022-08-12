import React from 'react'
import { useParams } from 'react-router-dom'
import cars from '../cars.json'

import '../App.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// Container, Paper, Chip //

const Car = (props) => {
    const { id } = useParams()
    const searchedCar = cars.find((vehicle) => vehicle.id == id)

    return (
        <Container className='card' maxWidth="sm">
            <Paper className='car-paper' elevation={2}>
                <Box sx={{ bgcolor: 'white', height: "40vh"}}>
                    <h1>{searchedCar.Name}</h1>
                    <Stack flexWrap="wrap" direction="row">
                        <Chip label={`id: ${searchedCar.id}`} />
                        <Chip label={`Name: ${searchedCar.Name}`} />
                        <Chip label={`Miles_per_Gallon: ${searchedCar.Miles_per_Gallon}`} />
                        <Chip label={`Cylinders: ${searchedCar.Cylinders}`} />
                        <Chip label={`Displacement: ${searchedCar.Displacement}`} />
                        <Chip label={`Horsepower: ${searchedCar.Horsepower}`} />
                        <Chip label={`Weigth_in_lbs: ${searchedCar.Weight_in_lbs}`} />
                        <Chip label={`Acceleration: ${searchedCar.Acceleration}`} />
                        <Chip label={`Year: ${searchedCar.Year}`} />
                        <Chip label={`Origin: ${searchedCar.Origin}`} />
                    </Stack>
                </Box>
            </Paper>
        </Container>
    )
}

export default Car