import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const VolunteerPage: React.FC = () => {
  const title = 'Volunteer Title';
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo et augue ultrices blandit. In hac habitasse platea dictumst. Duis eu massa sit amet elit elementum interdum.';

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={handleClick}>
          Click me
        </Button>
      </Box>
    </Box>
  );
};

export default VolunteerPage;
