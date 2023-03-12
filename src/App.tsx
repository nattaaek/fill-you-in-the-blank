import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './common/theme/theme';
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import '../src/utils/i18n';
import { Suspense } from 'react';

const App = (): JSX.Element => {
  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Auth0Provider
          domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
          clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <RouterProvider router={router} />
        </Auth0Provider>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
