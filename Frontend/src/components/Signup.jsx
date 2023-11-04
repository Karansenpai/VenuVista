import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Select, MenuItem } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
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

  const handleChangeUserType = (event) => {
    setUserType(event.target.value);
  };

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

  const maxCharacterLimit = 60; 

  return (
    <Container maxWidth="xs">
        <Grid item xs={12}>
            <Select
              label="User Type"
              variant="outlined"
              fullWidth
              value={userType}
              onChange={handleChangeUserType}
              required
            >
              <MenuItem value="restaurant">Restaurant</MenuItem>
              <MenuItem value="library">Library</MenuItem>
            </Select>
          </Grid>
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
          <Grid item xs={12}>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              name="city"
              value={formData.city}
              onChange={handleChange}
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
                value={formData.isVeg}
                onChange={handleChange}
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
                value={formData.totalTables}
                onChange={handleChange}
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
                value={formData.description}
                onChange={handleChange}
                inputProps={{
                    maxLength: maxCharacterLimit,
                }}
                required
              />
              <Typography variant="body2" color={formData.description.length > maxCharacterLimit ? "error" : "textPrimary"}>
                {formData.description.length}/{maxCharacterLimit}
              </Typography>
            </Grid>
          )}
          {userType === 'library' && (
            <Grid item xs={12}>
              <TextField
                label="totalSeats"
                variant="outlined"
                fullWidth
                name="totalSeats"
                value={formData.totalSeats}
                onChange={handleChange}
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
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
