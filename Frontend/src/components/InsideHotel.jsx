import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function HotelPage() {
  return (
    <div style={{marginTop: '16px', marginBottom: '16px', display: "flex", direction: "column", alignItems: "center", justifyContent: 'center'}}>
    <Card sx={{ width: '80%'}}>
      <CardActionArea style={{':hover':'none', pointerEvents: 'none', cursor: 'none'}}>
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>
  );
}
