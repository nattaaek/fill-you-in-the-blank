import { Grid, TextField, FormControlLabel, Checkbox, Typography, Card, CardContent, Chip, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Menu from "../../common/components/Menu";

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
    let searchTerms = event.target.value.toLowerCase().split(" ").filter((term) => term !== "");
    let filtered = projects.filter((project) => {
      const searchTextMatch =
        searchTerms.length === 0 ||
        searchTerms.every((term) =>
          project.name.toLowerCase().includes(term) ||
          project.policies.some((policy) => policy.toLowerCase().includes(term)) ||
          project.sdgs.some((sdg) => sdg.toLowerCase().includes(term))
        );
      const selectedPoliciesMatch =
        selectedPolicies.length === 0 ||
        selectedPolicies.some((policy) => project.policies.includes(policy));
      const selectedSdgsMatch =
        selectedSdgs.length === 0 || selectedSdgs.some((sdg) => project.sdgs.includes(sdg));
      return searchTextMatch && selectedPoliciesMatch && selectedSdgsMatch;
    });
    setFilteredProjects(filtered);
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
      <Menu />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={handleSearch}
            InputProps={{
              style: {
                backgroundColor: "#F4F4F4",
                borderRadius: 4,
                paddingLeft: 10,
                paddingRight: 10,
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="h3" sx={{ color: "#008000", fontWeight: "bold", marginTop: 2 }}>
            Mayor Policies
          </Typography>
          {["Water Conservation", "Policy 2", "Policy 3"].map((policy) => (
            <div key={policy}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPolicies.includes(policy)}
                    onChange={() => handlePolicyChange(policy)}
                  />
                }
                label={<Typography variant="body1" component="span" sx={{ color: "#4F4F4F" }}>{policy}</Typography>}
              />
            </div>
          ))}
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="h3" sx={{ color: "#008000", fontWeight: "bold", marginTop: 2 }}>
            SDGs
          </Typography>
          {["SDG 1", "SDG 2", "SDG 3"].map((sdg) => (
            <div key={sdg}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedSdgs.includes(sdg)}
                    onChange={() => handleSdgChange(sdg)}
                  />
                }
                label={<Typography variant="body1" component="span" sx={{ color: "#4F4F4F" }}>{sdg}</Typography>}
              />
            </div>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" sx={{ color: "#008000", fontWeight: "bold", marginTop: 2 }}>
            Projects
          </Typography>
          {filteredProjects.length === 0 ? (
            <Typography variant="h5" sx={{ color: "#4F4F4F", marginTop: 2 }}>No projects found</Typography>
          ) : (
            filteredProjects.map((project) => (
              <Card key={project.id} sx={{ marginTop: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: "bold", color: "#008000" }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ color: "#4F4F4F", marginTop: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ marginTop: 1 }}>
                    {project.policies.map((policy) => (
                      <Chip key={policy} label={policy} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#F4F4F4", color: "#4F4F4F", fontWeight: "bold" }} />
                    ))}
                  </Box>
                  <Box sx={{ marginTop: 1 }}>
                    {project.sdgs.map((sdg) => (
                      <Chip key={sdg} label={sdg} style={{ marginRight: 5, marginBottom: 5, backgroundColor: "#F4F4F4", color: "#4F4F4F", fontWeight: "bold" }} />
                      ))}
                    </Box>
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

