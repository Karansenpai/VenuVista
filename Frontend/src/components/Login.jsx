import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Select, MenuItem } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData); // You can replace this with your submission logic
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
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
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              type="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="city"
              value={formData.password}
              onChange={handleChange}
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
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
