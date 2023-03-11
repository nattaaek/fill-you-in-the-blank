import { Box, Typography, Select, MenuItem, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import theme from "../../common/theme/theme";

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

const ExploreProject = ({ projects }: ExploreProjectProps) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setFilter(event.target.value as string);
  };

  const filteredProjects = filter
    ? projects.filter(
        (project) => project.sdg === filter || project.policy === filter
      )
    : projects;

  return (
    <Box sx={{
        backgroundColor: "#f5f5f5",
        padding: theme.spacing(8, 0),
    }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" sx={{
                fontWeight: "bold",
                marginBottom: theme.spacing(4),
        }}>
          Explore Projects
        </Typography>
        <Box>
          <Select
            value={filter}
            onChange={() => handleFilterChange}
            displayEmpty
            sx={{
                minWidth: "200px",
                marginRight: theme.spacing(2),
            }}
            inputProps={{ "aria-label": "Filter projects by SDG or policy" }}
          >
            <MenuItem value="" disabled>
              Filter by SDG or policy
            </MenuItem>
            <MenuItem value="SDG1">SDG 1: No Poverty</MenuItem>
            <MenuItem value="SDG2">SDG 2: Zero Hunger</MenuItem>
            <MenuItem value="SDG3">SDG 3: Good Health and Well-being</MenuItem>
            <MenuItem value="policy1">Bangkok Policy 1</MenuItem>
            <MenuItem value="policy2">Bangkok Policy 2</MenuItem>
          </Select>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {filteredProjects.slice(0, 3).map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{
                backgroundColor: "#ffffff",
                padding: theme.spacing(4),
                borderRadius: theme.spacing(2),
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                height: "100%",
            }}>
            <Box sx={{
                width: "100%",
                marginBottom: theme.spacing(2),
            }}>
                <img
                    src={project.image}              
                    alt={project.title}
                />
            </Box>
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

