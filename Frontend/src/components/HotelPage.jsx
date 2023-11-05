import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import { BASE_URL } from "./config";
import axios from "axios";



export default function HotelPage() {
  const [seats, setseats] = React.useState(0);
  const [vacate, setvacate] = React.useState(0);
  const [totalTables ,settotalTable] = React.useState(0);
  const [tableOccupied ,settableOccupied] = React.useState(0);
  const [refersh, setrefresh] = React.useState(1);
  const [data, setData] = React.useState({});

  React.useEffect(()=>{
    const init = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/fetch/fetchone`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const responseData = response.data;
        console.log(responseData);
        settotalTable(responseData.totalTables);
        settableOccupied(responseData.tablesOccupied);
        setData(responseData);
      } catch (error) {
        // Handle any potential errors here
        console.error("Error fetching data:", error);
      }
    };
    init();    
  },[refersh])
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
          {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', flexDirection: 'column'}}>
        <Button variant="outlined">Edit</Button>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          <div>
        <Typography gutterBottom variant="h5" component="div">
          Total seats: {totalTables}
          </Typography>
          </div>
          <div>
          <Typography gutterBottom variant="h5" component="div">
          Available seats: {totalTables-tableOccupied}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Occupued seats: {tableOccupied}
          </Typography>
          </div>
          </div>
      </CardActions>
      <div style={{marginTop: '16px', marginBottom: '16px', display: "flex", direction: "column", alignItems: "center", justifyContent: 'center', gap: '20px'}}>
      <TextField id="filled-basic" label="no of tables" variant="filled" 
        InputProps={{
          inputProps: {
            type: 'number',
            step: 1, // step by 1
            min: 1,   // minimum value
          }
        }}
        onChange={(e) => setseats(e.target.value)}/>
        <Button variant="outlined"
        onClick={async () => {
          const response = await axios.put(
            `${BASE_URL}/api/update/book`,
            {
              seats: seats,
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          if (response.data.message) {
            setrefresh(refersh+1);
            alert(response.data.message);
          } else {
            alert(response.data.err);
          }
        }}
        >BOOK</Button>
        <TextField
            id="filled-basic"
            label="no of seats to vacate?"
            type="number"
            variant="filled"
            onChange={(e) => setvacate(e.target.value)}
          />
        <Button
            variant="outlined"
            onClick={async () => {
              const response = await axios.put(
                `${BASE_URL}/api/update/vacate`,
                {
                  vacate: vacate,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              if (response.data.message) {
                setrefresh(refersh+1);
                alert(response.data.message);
              } else {
                alert(response.data.err);
              }
            }}
          >
            Vacate
          </Button>
      </div>
    </Card>
    </div>
  );
}
