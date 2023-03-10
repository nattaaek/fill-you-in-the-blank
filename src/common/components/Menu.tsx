import React, { useMemo } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Menu: React.FC = () => {
  const memoizedButton = useMemo(() => {
    const { loginWithRedirect } = useAuth0();

    return (
      <Button color="inherit" onClick={() => loginWithRedirect()}>
        Login
      </Button>
    );
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Some awesome app
        </Typography>
        {memoizedButton}
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
