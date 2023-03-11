import { Typography, Box, Button } from '@mui/material';

const AboutPage = () => {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo et augue ultrices blandit. In hac habitasse platea dictumst. Duis eu massa sit amet elit elementum interdum.
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" onClick={() => console.log('Click')}>
            Click me
          </Button>
        </Box>
      </Box>
    );
}

export default AboutPage;
