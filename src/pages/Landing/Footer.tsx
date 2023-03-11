import { Box, Typography, Link } from "@mui/material";
import theme from "../../common/theme/theme";

const Footer = () => {
  return (
    <Box sx={{
        backgroundColor: "#4caf50",
        color: "#ffffff",
        padding: theme.spacing(4, 0),
    }}>
      <Box maxWidth="lg" mx="auto" sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        <Typography variant="h5" sx={{
            fontWeight: "bold",
            fontSize: 32,
            marginRight: theme.spacing(2),
        }}>
          Logo
        </Typography>
        <Box>
          <Link href="#" sx={{
                color: "#ffffff",
                fontWeight: "bold",
                marginLeft: theme.spacing(3),
                "&:hover": {
                  color: "#f5f5f5",
                },
          }}>
            About
          </Link>
          <Link href="#" sx={{
                color: "#ffffff",
                fontWeight: "bold",
                marginLeft: theme.spacing(3),
                "&:hover": {
                  color: "#f5f5f5",
                },
          }}>
            Projects
          </Link>
          <Link href="#" sx={{
                color: "#ffffff",
                fontWeight: "bold",
                marginLeft: theme.spacing(3),
                "&:hover": {
                  color: "#f5f5f5",
                },
          }}>
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
