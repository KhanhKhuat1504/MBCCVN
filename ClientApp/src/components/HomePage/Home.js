import React from 'react';
import HomeImage from './images/HomeImage.jpg';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HomeImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    }}>
      
      </Box>
    );
}

export default Home;