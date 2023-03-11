import { AppBar, Toolbar, Box } from "@mui/material";
import MenuItem from "../MenuItem/MenuItem";
import logo from '../../../assets/logo.webp'
import { Link, Outlet, redirect, useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  return (
    <Box>
    <AppBar position="static" sx={{
      backgroundColor: "#ffffff",
      color: "#000000",
      boxShadow: "none",
      position: "fixed",
      top: 0,
      zIndex: 1000,
    }}>
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <Link to="/">
          <img
            width={100}
            src={logo}
            alt="Logo"
          />
          </Link>
        </Box>

        <Box display="flex" alignItems="center">
          <MenuItem label="ABOUT" handleClick={() => navigate('/about')} />
          <MenuItem label="PROJECTS" handleClick={() => navigate('/project')}/>
          <MenuItem label="WIKIBANGKOK" externalLink={true} externalLinkUrl={"https://bangkok.source.in.th/wiki/Main_Page"}/>
          <MenuItem label="VOLUNTEER" handleClick={() => navigate('/volunteer')} />
          <MenuItem label="SEARCH" />
          <MenuItem label="EN-US" />
        </Box>
      </Toolbar>
    </AppBar>

    <Outlet />
    </Box>
  );
};

export default Header;
