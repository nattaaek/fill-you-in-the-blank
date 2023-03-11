import { makeStyles, Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import theme from "../../common/theme/theme";

interface Event {
  date: string;
  title: string;
  location: string;
}

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  return (
    <Box sx={{
        backgroundColor: "#f5f5f5",
        padding: theme.spacing(8, 0),
    }} data-testid="upcoming-events">
      <Typography variant="h4" sx={{
            fontWeight: "bold",
            marginBottom: theme.spacing(4),
      }}>
        Upcoming Events
      </Typography>

      <Grid container spacing={4}>
        {events.slice(0, 3).map((event, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
              <CardContent data-testid="card-content">
                <Typography variant="subtitle1" sx={{
                    backgroundColor: "#4caf50",
                    color: "#ffffff",
                    padding: theme.spacing(1, 2),
                    borderRadius: theme.spacing(1),
                    fontWeight: "bold",
                    display: "inline-block",
                    marginBottom: theme.spacing(2),
                }}>
                  {event.date}
                </Typography>
                <Typography variant="h6" sx={{
                    fontWeight: "bold",
                    marginBottom: theme.spacing(2),
                }}>
                  {event.title}
                </Typography>
                <Typography variant="subtitle1" sx={{
                    color: "#666666",
                    marginBottom: theme.spacing(2),
                }}>
                  {event.location}
                </Typography>
              </CardContent>
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
                }}>RSVP</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" marginTop={4}>
        <Button
          variant="outlined"
          color="primary"
          component="a"
          href="/events"
        >
          View All Events
        </Button>
      </Box>
    </Box>
  );
};

export default UpcomingEvents;
