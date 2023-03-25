import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import BangkokPolicyCategory from "../../common/constants/BangkokPolicyCategory";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  mayorPolicy: string[];
  sdg: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Autism Run",
    description: "A community-driven event that raises awareness and funds for autism support, research, and education. The event includes marathons, walks, and family-friendly activities.",
    mayorPolicy: ["Good Creativity", "Good Environment"],
    sdg: ["SDG 3"],
  },
  {
    id: 2,
    title: "Project X",
    description: "A global environmental initiative focused on reducing carbon emissions by promoting sustainable practices, clean technology, and efficient resource management.",
    mayorPolicy: ["Good Environment"],
    sdg: ["SDG 13"],
  },
  {
    id: 3,
    title: "Team Alpha",
    description: "A youth empowerment project that offers leadership training, mentorship, and resources for personal and professional development to underprivileged adolescents.",
    mayorPolicy: ["Good Study"],
    sdg: ["SDG 4", "SDG 8"],
  },
  {
    id: 4,
    title: "The Initiative",
    description: "A social project that aims to improve the quality of life for people with disabilities by providing accessibility solutions and fostering inclusion in communities.",
    mayorPolicy: ["Good Economy", "Good Study"],
    sdg: ["SDG 10", "SDG 11"],
  },
  {
    id: 5,
    title: "Blueprint",
    description: "A project that aims to develop sustainable urban planning strategies by integrating eco-friendly design principles and innovative technologies into city infrastructure.",
    mayorPolicy: ["Good Environment", "Good Structure"],
    sdg: ["SDG 11", "SDG 12"],
  },
  {
    id: 6,
    title: "NextGen",
    description: "A future-focused education initiative that cultivates critical thinking and problem-solving skills in children to prepare them for success in the rapidly changing world.",
    mayorPolicy: ["Good Study"],
    sdg: ["SDG 4"],
  },
  {
    id: 7,
    title: "The Vision",
    description: "A community-driven program dedicated to addressing mental health issues by providing support, resources, and advocacy to individuals and families in need.",
    mayorPolicy: ["Good Health"],
    sdg: ["SDG 3"],
  },
  {
    id: 8,
    title: "Phase One",
    description: "A social entrepreneurship incubator that offers funding, mentorship, and resources to help startups with a social or environmental mission succeed.",
    mayorPolicy: ["Good Economy"],
    sdg: ["SDG 8", "SDG 9"],
  },
  {
    id: 9,
    title: "Pioneer",
    description: "A project that supports the preservation of endangered species and their habitats by implementing conservation strategies and raising public awareness.",
    mayorPolicy: [],
    sdg: ["SDG 15"],
  },
  {
    id: 10,
    title: "Trailblazer",
    description: "A volunteer-based initiative that focuses on creating and maintaining safe, clean, and accessible trails in local parks and natural areas.",
    mayorPolicy: ["Good Environment"],
    sdg: ["SDG 11", "SDG 15"],
  },
  {
    id: 11,
    title: "The Drive",
    description: "A social project that aims to combat poverty by providing essential resources, educational opportunities, and job training to disadvantaged communities.",
    mayorPolicy: ["Good Study", "Good Economy"],
    sdg: ["SDG 1", "SDG 4"],
  },
  {
    id: 12,
    title: "Velocity Ventures",
    description: "An initiative that supports women entrepreneurs by offering resources, networking opportunities, and mentorship to help them grow their businesses and create economic opportunities.",
    mayorPolicy: ["Good Study", "Good Economy"],
    sdg: ["SDG 5", "SDG 8"],
  },
];

const sdgs: string[] = ["SDG 1", "SDG 2", "SDG 3", "SDG 4", "SDG 5", "SDG 6", "SDG 7", "SDG 8", "SDG 9", "SDG 10", "SDG 11", "SDG 12", "SDG 13", "SDG 14", "SDG 15", "SDG 16", "SDG 17"];

const ProjectPage: React.FC = () => {
  const [selectedPolicies, setSelectedPolicies] = useState<string[]>([]);
  const [selectedSdgs, setSelectedSdgs] = useState<string[]>([]);
  const [recommendedProject, setRecommendedProject] = useState<Project | null>(null);

  const handleFilter = (selectedPolicies: string[], selectedSdgs: string[]): void => {
    setSelectedPolicies(selectedPolicies);
    setSelectedSdgs(selectedSdgs);
  };

  const filteredProjects = projectData.filter((project) => {
    if (
      selectedPolicies.length > 0 &&
      !selectedPolicies.some((policy) => project.mayorPolicy.includes(policy))
    ) {
      return false;
    }
    if (
      selectedSdgs.length > 0 &&
      !selectedSdgs.some((sdg) => project.sdg.includes(sdg))
    ) {
      return false;
    }
    return true;
  });

  const handleRecommendedProject = (): void => {
    // Your logic to find the recommended project here
    const recommended = filteredProjects.find((project) =>
      project.mayorPolicy.includes("Good Study")
    );
    setRecommendedProject(recommended || null);
  };

  React.useEffect(() => {
    handleRecommendedProject();
  }, [selectedPolicies, selectedSdgs]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Bangkok Mayor Policy and SDG Projects
        </Typography>
        <FilterBar
          mayorPolicies={BangkokPolicyCategory}
          sdgs={sdgs}
          onFilter={handleFilter}
        />
        {recommendedProject && (
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Recommended Project
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ m: 2 }}>
              <Link to={`/projects/${recommendedProject.id}`} style={{ textDecoration: "none" }}>
                <ProjectCard
                  title={recommendedProject.title}
                  description={recommendedProject.description}
                  mayorPolicy={recommendedProject.mayorPolicy}
                  sdg={recommendedProject.sdg}
                />
                </Link>
              </Box>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Box key={project.id} sx={{ m: 2 }}>
                <Link to={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  mayorPolicy={project.mayorPolicy}
                  sdg={project.sdg}
                />
                </Link>
              </Box>
            ))
          ) : (
            <Typography variant="h5" align="center">
              No projects found.
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectPage;
