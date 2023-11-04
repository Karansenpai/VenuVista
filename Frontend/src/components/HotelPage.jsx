import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function HotelPage() {

  const [seats, setseats] = React.useState(0);
  return (
    <div style={{marginTop: '16px', marginBottom: '16px', display: "flex", direction: "column", alignItems: "center", justifyContent: 'center'}}>
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
        <Button variant="outlined">Edit</Button>
        <TextField id="filled-basic" label="no of seats to book?" variant="filled" 
        onChange={(e) => setseats(e.target.value)}/>
        <Button variant="outlined"
        onClick={()=>{
          
        }}
        
        >BOOK</Button>
        <Button variant="outlined">VACANT</Button>
      </CardActions>
    </Card>
    </div>
  );
}
