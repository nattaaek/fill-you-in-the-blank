import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const VolunteerPage: React.FC = () => {
  const title = 'Volunteer Title';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo et augue ultrices blandit. In hac habitasse platea dictumst. Duis eu massa sit amet elit elementum interdum.';

  const handleClick = (): void => {
    console.log('Click');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ padding: 2, display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", alignItems: "center" }}>
        <h1>COMING SOON</h1>
        <p>This website is under construction.</p>
      </Box>
    </Box>
  );
};

export default VolunteerPage;
