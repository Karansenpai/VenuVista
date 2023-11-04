import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function HotelPage() {
  return (
    <Card sx={{ width: '80%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX85iLXo8rl0uEBmZszlacP0bzRpkjkVLQoA&usqp=CAU"
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
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
