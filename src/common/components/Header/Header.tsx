import { AppBar, Toolbar, Box } from "@mui/material";
import MenuItem from "../MenuItem/MenuItem";

const Header = () => {
  return (
    <Box>
    <AppBar position="static" sx={{
      backgroundColor: "#ffffff",
      color: "#000000",
      boxShadow: "none",
      position: "fixed",
      zIndex: 1000,
    }}>
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <img
            width={200}
            src="/logo.png"
            alt="Logo"
          />
        </Box>

        <Box display="flex" alignItems="center">
          <MenuItem label="ABOUT" />
          <MenuItem label="PROJECTS" />
          <MenuItem label="WIKIBANGKOK" />
          <MenuItem label="VOLUNTEER" />
          <MenuItem label="SEARCH" />
          <MenuItem label="EN-US" />
        </Box>
      </Toolbar>
    </AppBar>

    <Box sx={{
          backgroundImage: `url('https://dummyimage.com/1240x960/000/fff')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh)", // subtract the height of the app bar
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
    }}>

    </Box>
    </Box>
  );
};

export default Header;
