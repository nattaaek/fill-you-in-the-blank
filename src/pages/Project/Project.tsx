import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import BangkokPolicyCategory from "../../common/constants/BangkokPolicyCategory";

interface Project {
  id: number;
  title: string;
  description: string;
  mayorPolicy: string;
  sdg: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Project A",
    description: "This is project A",
    mayorPolicy: "Policy 1",
    sdg: "SDG 1",
  },
  {
    id: 2,
    title: "Project B",
    description: "This is project B",
    mayorPolicy: "Policy 2",
    sdg: "SDG 2",
  },
  {
    id: 3,
    title: "Project C",
    description: "This is project C",
    mayorPolicy: "Policy 1",
    sdg: "SDG 3",
  },
];

const sdgs: string[] = ["SDG 1", "SDG 2", "SDG 3"];

const ProjectPage: React.FC = () => {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);
  const [selectedSdgs, setSelectedSdgs] = useState<string[]>([]);

  const handleFilter = (selectedPolicies: string[], selectedSdgs: string[]): void => {
    setSelectedPolicies(selectedPolicies);
    setSelectedSdgs(selectedSdgs);
  };

  const filteredProjects = projectData.filter((project) => {
    if (
      selectedPolicies.length > 0 &&
      !selectedPolicies.includes(project.mayorPolicy)
    ) {
      return false;
    }
    if (selectedSdgs.length > 0 && !selectedSdgs.includes(project.sdg)) {
      return false;
    }
    return true;
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" align="center">
          Bangkok Mayor Policy and SDG Projects
        </Typography>
        <FilterBar
          mayorPolicies={BangkokPolicyCategory}
          sdgs={sdgs}
          onFilter={handleFilter}
        />
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {filteredProjects.map((project) => (
            <Box key={project.id} sx={{ m: 2 }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                mayorPolicy={project.mayorPolicy}
                sdg={project.sdg}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectPage;
