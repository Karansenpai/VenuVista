import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const cardStyle = {
  background: "#eeeeee",
  color: "black",
  maxWidth: 345,
  borderRadius: "15px", // Increase the border-radius for a more rounded look
  border: "1px solid #EAEAEA",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
  transition: "transform 0.2s", // Add a smooth hover effect
  "&:hover": {
    transform: "scale(1.03)", // Scale up the card on hover
  },
};

const mediaStyle = {
  height: "194px", // Adjust the height of the image
  objectFit: "cover", // Ensure the image covers the entire space
};

const buttonStyle = {
  marginTop: "10px", // Add some spacing between the text and the button
};

const HotelCard = (props) => {
  const navigate = useNavigate();

  return (
    <Card sx={cardStyle}>
      <CardHeader title={props.name} />
      <CardMedia component="img" sx={mediaStyle} image={props.img} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Button
          variant="contained"
          color="primary" // Change the button color
          sx={buttonStyle}
          onClick={() => {
            navigate(`insidehotel/${props.id}`);
          }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
}

export default HotelCard;
