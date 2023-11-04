import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function HotelPage() {
  // Sample values for total seats, seats available, and estimated time
  const totalSeats = 100;
  const seatsAvailable = 40;
  const estimatedTime = '30 minutes';

  return (
    <div style={{ marginTop: '16px', marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ width: '80%' }}>
        <CardActionArea style={{ pointerEvents: 'none', cursor: 'none' }}>
          <CardMedia
            component="img"
            height="350vh"
            image="https://www.timeoutdubai.com/cloud/timeoutdubai/2023/06/06/Sushisamba.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hotel 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column' , justifyContent: 'space-between' }}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}> 
              <Typography variant="body1">Total Seats: {totalSeats}</Typography>
              <Typography variant="body1">Seats Available: {seatsAvailable}</Typography>
            </div>
            <div>
              <Typography variant="body1">Estimated Time: {estimatedTime}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
