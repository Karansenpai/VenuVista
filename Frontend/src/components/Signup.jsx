import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Select, MenuItem } from '@mui/material';
import { BASE_URL } from './config';
import { userInfo } from '../../atoms/userInfo';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios'; // Import axios for making HTTP requests

const Signup = () => {
  const setInfo = useSetRecoilState(userInfo);
  const navigate = useNavigate(); // Added navigate function
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
    password: '',
    city: '',
    isVeg: '',
    totalTables: '',
    totalSeats: '',
    description: '',
  });

  const [userType, setUserType] = useState('restaurant'); // State to store the selected user type

  const maxCharacterLimit = 60;

  const handleSignup = async () => {
    try {
      console.log(inputs);

      const res = await axios.post(`${BASE_URL}/api/users/restaurant/signup`, inputs); // Send the 'inputs' object directly

      const data = res.data; // Use res.data to get response data

      if (data.token) {
        setInfo({
          userId: data._id,
          isLoading: false,
        });
        localStorage.setItem('token', data.token);
        navigate('/landing'); // Navigate to the desired page
      } else {
        alert(data.err);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              type="text" // Use 'text' as the input type
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              name="city"
              onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
              required
            />
          </Grid>
          {userType === 'restaurant' && (
            <Grid item xs={12}>
              <TextField
                label="isVeg"
                variant="outlined"
                fullWidth
                name="isVeg"
                onChange={(e) => setInputs({ ...inputs, isVeg: e.target.value })}
                required
              />
            </Grid>
          )}
          {userType === 'restaurant' && (
            <Grid item xs={12}>
              <TextField
                label="totalTables"
                variant="outlined"
                fullWidth
                name="totalTables"
                onChange={(e) => setInputs({ ...inputs, totalTables: e.target.value })}
                required
              />
            </Grid>
          )}
          {userType === 'restaurant' && (
            <Grid item xs={12}>
              <TextField
                label="description"
                variant="outlined"
                fullWidth
                name="description"
                onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                inputProps={{
                  maxLength: maxCharacterLimit,
                }}
                required
              />
            </Grid>
          )}
          {userType === 'library' && (
            <Grid item xs={12}>
              <TextField
                label="totalSeats"
                variant="outlined"
                fullWidth
                name="totalSeats"
                onChange={(e) => setInputs({ ...inputs, totalSeats: e.target.value })}
                required
              />
            </Grid>
          )}
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
