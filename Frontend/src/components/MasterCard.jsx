import React from 'react'
import { Grid } from '@mui/material'
import HotelCard from './HotelCard' 

const hotelsData = [
  {
    id: 1,
    title: 'Hotel 1',
    description: 'Description of Hotel 1',
  },
  {
    id: 2,
    title: 'Hotel 2',
    description: 'Description of Hotel 2',
  },
  {
    id: 2,
    title: 'Hotel 2',
    description: 'Description of Hotel 2',
  },
  {
    id: 2,
    title: 'Hotel 2',
    description: 'Description of Hotel 2',
  },
  {
    id: 2,
    title: 'Hotel 2',
    description: 'Description of Hotel 2',
  },
  {
    id: 2,
    title: 'Hotel 2',
    description: 'Description of Hotel 2',
  },
  {
    id: 2,
    title: 'Hotel 2',
    description: 'Description of Hotel 2',
  },
  {
    id: 2,
    title: 'Hotel 2',
    description: 'Description of Hotel 2',
  },
  {
    id: 2,
    title: 'Hotel 2',
    description: 'Description of Hotel 2',
  },
];

const MasterCard = () => {
  return (
    <Grid container spacing={3}>
      {hotelsData.map((hotel) => (
        <Grid item xs={12} sm={6} md={4} key={hotel.id}>
          <HotelCard title={hotel.title} img={hotel.img} description={hotel.description} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MasterCard
