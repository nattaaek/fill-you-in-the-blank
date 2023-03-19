import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";

interface User {
  name: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
}

const roles = ["Government", "Corporate", "Civic Society", "Local Community"];

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (): void => {
    // Save the user profile information to a database or API here
    console.log(user);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center">
          User Profile
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Organization"
            name="organization"
            value={user.organization}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            select
            margin="normal"
            label="Role"
            name="role"
            value={user.role}
            onChange={handleChange}
          >
            {roles.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          <Button
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Save Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserProfile;
