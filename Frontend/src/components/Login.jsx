  import React, { useState } from 'react';
  import { Button, TextField, Grid, Typography, Container, Select, MenuItem } from '@mui/material';
  import { BASE_URL } from './config';
  import { userInfo } from '../../atoms/userInfo';
  import { useNavigate } from 'react-router-dom';
  import { useSetRecoilState } from 'recoil';

  const Login = () => {
    const navigate = useNavigate();
    const setInfo = useSetRecoilState(userInfo);

    const [inputs, setInputs] = useState({
      username: '',
      password: '',
    });

    const maxCharacterLimit = 60;

    const handleLogin = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/users/restaurant/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const data = await res.json();

        if (data.token) {
          localStorage.setItem('token', data.token);
          setInfo({
            userId: data._id,
            isLoading: false,
          });
          navigate('/landing');
        } else {
          alert(data.err);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Container maxWidth="xs" >
        <div style={{marginTop: '20%', marginBottom: '20%'}}>
        <Typography variant="h4" gutterBottom>
          Log in
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              type="text"
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
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handleLogin}
        >
          Log in
        </Button>
        </div>
      </Container>
    );
  };

  export default Login;
