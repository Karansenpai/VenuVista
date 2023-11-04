import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import HotelCard from './HotelCard';
import axios from 'axios';
import { BASE_URL } from './config';

const MasterCard = () => {
  const [hotelsData, setHotelsData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/fetch/fetchall`);
      setHotelsData(response.data.Users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once
  console.log(hotelsData);
  return (
    <div style={{ marginTop: '16px', marginBottom: '16px' }}>
      <Grid container spacing={3}>
        {hotelsData.map((hotel) => (
          <Grid item xs={12} sm={6} md={4} key={hotel._id} display="flex" direction="column" alignItems="center">
            <HotelCard name={hotel.name} img={'https://media-cdn.tripadvisor.com/media/photo-s/1b/5b/26/92/punjab.jpg'} description={hotel.description} id={hotel._id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MasterCard;
