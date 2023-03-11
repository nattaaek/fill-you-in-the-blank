import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './common/theme/theme';
import Landing from './pages/Landing/Landing'
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from "dotenv";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Auth0Provider
        domain={''}
        clientId={''}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
      <Landing />
      </Auth0Provider>
    </ThemeProvider>
  )
}

export default App
