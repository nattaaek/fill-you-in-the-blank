import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './common/theme/theme';
import Landing, { Project } from './pages/Landing/Landing'
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Clean Water Initiative",
      description: "Providing access to clean water for communities in need",
      policies: ["Water Conservation", "Water Treatment"],
      sdgs: ["SDG 6: Clean Water and Sanitation"]
    },
    {
      id: 2,
      name: "Community Health Program",
      description: "Improving the health of underprivileged communities through education and access to healthcare",
      policies: ["Healthcare Access", "Health Education"],
      sdgs: ["SDG 3: Good Health and Well-being"]
    },
    {
      id: 3,
      name: "Environmental Sustainability",
      description: "Promoting environmental sustainability through waste reduction and conservation efforts",
      policies: ["Waste Reduction", "Conservation"],
      sdgs: ["SDG 13: Climate Action", "SDG 14: Life Below Water"]
    }
  ];
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ''}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ''}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
      <Landing projects={projects} />
      </Auth0Provider>
    </ThemeProvider>
  )
}

export default App
