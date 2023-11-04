import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./config";

export default function Insidehotel() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [totalSeats, settotalSeats] = useState(0);
  const [seatsAvailable, setSeatsAvailable] = useState(0);
  const estimatedTime = "30 minutes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/fetch/getDetail`, {
          headers: {
            id: id,
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        setUser(response.data);
        settotalSeats(response.data.totalTables);
        setSeatsAvailable(response.data.totalTables - response.data.tablesOccupied);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  // Define your inline styles
  const containerStyle = {
    marginTop: "16px",
    marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardStyle = {
    width: "80%",
  };

  const cardMediaStyle = {
    height: "350px",
  background: `url("https://www.timeoutdubai.com/cloud/timeoutdubai/2023/06/06/Sushisamba.jpg")`,
    backgroundSize: "cover",
  };

  const cardContentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const seatsInfoStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  return (
    <div style={containerStyle}>
      {user ? (
        <Card style={cardStyle}>
          <CardActionArea style={{ pointerEvents: "none", cursor: "none" }}>
            <CardMedia
              component="img"
              style={cardMediaStyle}
            />
            <CardContent style={cardContentStyle}>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.description}
              </Typography>
              <div style={seatsInfoStyle}>
                <Typography variant="body1">Total Seats: {totalSeats}</Typography>
                <Typography variant="body1">
                  Seats Available: {seatsAvailable}
                </Typography>
              </div>
              <Typography variant="body1">Estimated Time: {estimatedTime}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
