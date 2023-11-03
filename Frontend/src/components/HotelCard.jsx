import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function HotelCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.title}
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
      </CardContent>
    </Card>
  );
}
