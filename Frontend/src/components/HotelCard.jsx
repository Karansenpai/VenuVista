import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import '../styles/HotelCard.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function HotelCard(props) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "5%", border: "1px solid #EAEAEA" }}>
      <CardHeader
        title={props.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.img}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Button variant='outlined'
        onClick={()=>{
          navigate(`insidehotel/${props.id}`)
        }}
        
        >View</Button>
      </CardContent>
    </Card>
  
  );
}
