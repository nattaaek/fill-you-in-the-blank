import { Grid, TextField, FormControlLabel, Checkbox, Typography, Card, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";

export interface Project {
  id: number;
  name: string;
  description: string;
  policies: string[];
  sdgs: string[];
}

export interface LandingProps {
  projects: Project[];
}

const Landing: React.FC<LandingProps> = ({ projects }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);
  const [selectedSdgs, setSelectedSdgs] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    let filtered = projects.filter((project) => {
      const searchTextMatch =
        project.name.toLowerCase().includes(searchText.toLowerCase()) ||
        project.description.toLowerCase().includes(searchText.toLowerCase());
      const selectedPoliciesMatch =
        selectedPolicies.length === 0 ||
        selectedPolicies.some((policy) =>
          project.policies.includes(policy)
        );
      const selectedSdgsMatch =
        selectedSdgs.length === 0 ||
        selectedSdgs.some((sdg) => project.sdgs.includes(sdg));
      return searchTextMatch && selectedPoliciesMatch && selectedSdgsMatch;
    });
    setFilteredProjects(filtered);
  }, [projects, searchText, selectedPolicies, selectedSdgs]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handlePolicyChange = (policy: string) => {
    let updatedPolicies = [...selectedPolicies];
    if (updatedPolicies.includes(policy)) {
      updatedPolicies = updatedPolicies.filter((p) => p !== policy);
    } else {
      updatedPolicies.push(policy);
    }
    setSelectedPolicies(updatedPolicies);
  };

  const handleSdgChange = (sdg: string) => {
    let updatedSdgs = [...selectedSdgs];
    if (updatedSdgs.includes(sdg)) {
      updatedSdgs = updatedSdgs.filter((s) => s !== sdg);
    } else {
      updatedSdgs.push(sdg);
    }
    setSelectedSdgs(updatedSdgs);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={6}>
          <h3>Mayor Policies</h3>
          {["Policy 1", "Policy 2", "Policy 3"].map((policy) => (
            <div key={policy}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPolicies.includes(policy)}
                    onChange={() => handlePolicyChange(policy)}
                  />
                }
                label={policy}
              />
            </div>
          ))}
        </Grid>
        <Grid item xs={6}>
          <h3>SDGs</h3>
          {["SDG 1", "SDG 2", "SDG 3"].map((sdg) => (
            <div key={sdg}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSdgs.includes(sdg)}
                    onChange={() => handleSdgChange(sdg)}
                  />
                }
                label={sdg}
              />
            </div>
          ))}
        </Grid>
        <Grid item xs={12}>
          <h2>Projects</h2>
          {filteredProjects.length === 0 ? (
            <Typography variant="h5">No projects found</Typography>
          ) : (
            filteredProjects.map((project) => (
              <Card key={project.id}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography color="textSecondary">
                    {project.policies.join(", ")}
                  </Typography>
                  <Typography color="textSecondary">
                    {project.sdgs.join(", ")}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;

