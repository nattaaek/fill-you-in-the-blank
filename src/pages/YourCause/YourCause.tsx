import { Box, Grid, Typography } from "@mui/material";
import ExploreProject from "../Landing/ExploreProject";

const YourCause = (): JSX.Element => {
    return (
        <Grid container>
            <Grid item sm={12}>
                <Typography>Project 042 Autism Run</Typography>
            </Grid>
            <Grid item sm={12} md={5}>
                <img src="https://via.placeholder.com/300" alt="placeholder" />
            </Grid>
            <Grid item sm={12} md={7}>
                <Box display="flex" flexDirection="column">
                    <Typography>You are a Mover in Autism Run Project</Typography>
                    <img src="https://via.placeholder.com/500" alt="placeholder" width={300} />
                    <Typography>Next Action: 22 March, 4pm @Lumpini Park</Typography>
                </Box>
            </Grid>
            <Grid item sm={12}>
                <Typography>Project Description</Typography>
            </Grid>
            <Grid item sm={12}>
                <Box>
                    <Typography>Project Leader: Samantha Thomas</Typography>
                </Box>
            </Grid>
            <Grid item sm={12}>
                <Box>
                    <Typography>Project 014 Hyper Horizon</Typography>
                    <img src="https://via.placeholder.com/100" alt="placeholder" />
                </Box> 
            </Grid>
            <Grid item sm={12}>
                <ExploreProject projects={[]} />
            </Grid>
        </Grid>
    )
}

export default YourCause;