import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './common/theme/theme';
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

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
        <RouterProvider router={router} />
      </Auth0Provider>
    </ThemeProvider>
  )
}

export default App
