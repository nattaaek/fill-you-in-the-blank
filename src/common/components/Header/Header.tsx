import { type SyntheticEvent, useState } from "react";
import { AppBar, Toolbar, Box, Autocomplete, TextField } from "@mui/material";
import MenuItem from "../MenuItem/MenuItem";
import logo from '../../../assets/logo.webp'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import i18next from "i18next";
import { useAuth0 } from "@auth0/auth0-react";

type SupportedLocales = "en" | "th";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [locale, setLocale] = useState<SupportedLocales>('en');
  const { loginWithRedirect } = useAuth0();

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
          <MenuItem label="ABOUT" handleClick={() => { navigate('/about'); }} />
          <MenuItem label="PROJECTS" handleClick={() => { navigate('/project'); }}/>
          <MenuItem label="WIKIBANGKOK" externalLink={true} externalLinkUrl={"https://bangkok.source.in.th/wiki/Main_Page"}/>
          <MenuItem label="VOLUNTEER" handleClick={() => { navigate('/volunteer'); }} />
          <MenuItem label="LOGIN" handleClick={() => { void loginWithRedirect() }} />
          <Autocomplete
            options={["en", "th"]}
            style={{ width: 300 }}
            value={locale}
            disableClearable
            onChange={(_event: SyntheticEvent<Element, Event>, newValue: string) => {
              setLocale(newValue as SupportedLocales);
              void i18next.changeLanguage(newValue)
            }}
            renderInput={(params) => (
              <TextField {...params} label="Locale" fullWidth />
            )}
          />
        </Box>
      </Toolbar>
    </AppBar>

    <Outlet />
    </Box>
  );
};

export default Header;
