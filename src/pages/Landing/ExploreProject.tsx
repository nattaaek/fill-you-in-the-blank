import { Box, Typography, Select, MenuItem, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import theme from "../../common/theme/theme";
import { useNavigate } from 'react-router-dom';

interface Project {
  title: string;
  subtitle: string;
  image: string;
  sdg: string;
  policy: string;
}

interface ExploreProjectProps {
  projects: Project[];
}

const ExploreProject = ({ projects }: ExploreProjectProps): JSX.Element => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const filteredProjects = (filter.length > 0)
    ? projects.filter(
        (project) => project.sdg === filter || project.policy === filter
      )
    : projects;

  return (
    <Box sx={{
        backgroundColor: "#f5f5f5",
        padding: theme.spacing(8, 8),
    }} data-testid="explore-project">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" sx={{
                fontWeight: "bold",
                marginBottom: theme.spacing(4)
        }}>
          Explore Projects
        </Typography>
        <Box>
          <Button onClick={() => navigate("project")}>Explore more</Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {filteredProjects.slice(0, 3).map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box role="article" sx={{
                backgroundColor: "#ffffff",
                padding: theme.spacing(4),
                borderRadius: theme.spacing(2),
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                height: "100%",
            }}>
              <Typography variant="h6" sx={{
                        fontWeight: "bold",
                        marginBottom: theme.spacing(1),
              }}>
                {project.title}
              </Typography>
              <Typography variant="subtitle1" sx={{
                        color: "#666666",
                        marginBottom: theme.spacing(2),
              }}>
                {project.subtitle}
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
                }}>Learn More</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExploreProject;

