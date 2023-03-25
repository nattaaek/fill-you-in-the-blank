import { Box, Typography, Grid, Button } from "@mui/material";
import theme from "../../common/theme/theme";
import { useTranslation } from "react-i18next";

interface Cause {
  title: string;
  subtitle: string;
  image: string;
}

interface YourCausesProps {
  causes: Cause[];
}

const YourCauses = ({ causes }: YourCausesProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box sx={{
        backgroundColor: "#f5f5f5",
        padding: theme.spacing(8, 0),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }} data-testid="your-causes">
      <Typography variant="h4" align="center" sx={{
            fontWeight: "bold",
            marginBottom: theme.spacing(4),
      }}>
        Your Causes
      </Typography>
      <img width={100} src="/coming-soon.png" alt="coming-soon" />

{/*  
      <Grid container spacing={4}>
        {causes.map((cause, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{
                backgroundColor: "#ffffff",
                padding: theme.spacing(4),
                borderRadius: theme.spacing(2),
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                height: "100%",
            }} data-testid="cause-item">
                <Box sx={{
                    width: "100%",
                    marginBottom: theme.spacing(2),
                }}>
                <img
                src={cause.image}
                alt={cause.title}
              />
                </Box>

              <Typography variant="h6" sx={{
                    fontWeight: "bold",
                    marginBottom: theme.spacing(1),
              }}>
                {cause.title}
              </Typography>
              <Typography variant="subtitle1" sx={{
                    color: "#666666",
                    marginBottom: theme.spacing(2),
              }} data-testid="cause-subtitle">
                {cause.subtitle}
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button sx={{
                    backgroundColor: "#4caf50",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderRadius: theme.spacing(1),
                    padding: theme.spacing(1, 4),
                    "&:hover": {
                        backgroundColor: "#388e3c",
                    },
                }}>{ t('JOIN_NOW') }</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
};

export default YourCauses;
