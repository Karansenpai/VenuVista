import React, { useState} from 'react';
import { Button, TextField, Grid, Typography, Container } from '@mui/material';
import { BASE_URL } from './config';

import { useNavigate } from "react-router-dom";
const Signup = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email:"",
    password: "",
  })


  const handleSignup = async() =>{
    try{

      const res = await fetch(`${BASE_URL}/api/users/restaurant/signup`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();

      
      if(data.token){
        localStorage.setItem("token",data.token);
        navigate("/");
      }
      else{
        alert(data.err);
      }
      
    }
    catch(err){
      console.log(err);
    }
  }
  

  return (
    <Container maxWidth="xs">
      <div>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              onChange={(e) => setInputs({...inputs, name: e.target.value})}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              type="email"    
              onChange={(e) => setInputs({...inputs, email: e.target.value})}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </div>
    </Container>
  );
};

export default Signup;
