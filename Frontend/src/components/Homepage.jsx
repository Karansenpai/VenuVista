import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();
  return (
    <div style={{marginTop: 100}}>
      <header>
        <Container maxWidth="lg">
          <div style={{ padding: '2rem 0' }}>
            <Typography variant="h2" align="center" gutterBottom>
              Welcome to Restaurant Management Co.
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Your Partner in Managing Successful Restaurants
            </Typography>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary" size="large"
                onClick={()=>{
                    navigate("/restaurants");
                }}>
                  List of Restaurants
                </Button>
              </Grid>
              
            </Grid>
          </div>
        </Container>
      </header>

      
      
      
    </div>
  );
};

export default HomePage;
