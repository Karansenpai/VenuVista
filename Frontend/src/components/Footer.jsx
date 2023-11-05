import React from 'react';
import { Grid, Typography, IconButton, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '2rem 0',
  bottom: 0, 
  marginTop: 'auto',
};

const socialIconsStyle = {
  fontSize: '2rem',
  margin: '0.5rem',
};

const aboutTextStyle = {
  fontSize: '1rem',
};

const Footer = () => {
  return (
    <Grid container sx={footerStyle}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6">Follow Us</Typography>
        <IconButton component={Link} href="https://www.instagram.com/your_instagram_account" target="_blank">
          <InstagramIcon sx={socialIconsStyle} />
        </IconButton>
        <IconButton component={Link} href="https://twitter.com/your_twitter_account" target="_blank">
          <TwitterIcon sx={socialIconsStyle} />
        </IconButton>
        <IconButton component={Link} href="https://www.facebook.com/your_facebook_page" target="_blank">
          <FacebookIcon sx={socialIconsStyle} />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant="h6">About Us</Typography>
        <Typography sx={aboutTextStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit justo id nunc dapibus, nec
          vestibulum nulla lacinia. Vivamus sit amet ex nec nunc tincidunt elementum. Integer ac tincidunt quam.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Typography variant="h6">Copyright &copy; {new Date().getFullYear()}</Typography>
        <Typography sx={aboutTextStyle}>All rights reserved.</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
