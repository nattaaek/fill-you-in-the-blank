import { Box, Chip } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import theme from "../../common/theme/theme";

const projects = [
  {
    id: 1,
    name: "Project A",
    organizer: "Organizer A",
    date: "Mar 12",
    tags: ["SDG", "Bangkok's Mayor Policy"],
  },
  {
    id: 2,
    name: "Project B",
    organizer: "Organizer B",
    date: "Apr 23",
    tags: ["SDG"],
  },
  {
    id: 3,
    name: "Project C",
    organizer: "Organizer C",
    date: "May 7",
    tags: ["Bangkok's Mayor Policy"],
  },
];

const ProjectCarousel = () => {

  const renderProjects = () => {
    return <Box data-testid="project-carousel">
    {projects.map((project) => (
      <Box key={project.id} sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        backgroundColor: "#f2f2f2",
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        borderRadius: "8px",
        boxShadow: "0px 3px 6px #00000029",
      }}>
        <Box sx={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: theme.spacing(2),
        }}>{project.name}</Box>
        <Box sx={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: theme.spacing(1),
        }}>{project.organizer}</Box>
        <Box sx={{
            fontSize: "14px",
            color: "#828282",
            marginBottom: theme.spacing(2),
        }}>{project.date}</Box>
        <Box display="flex" alignItems="center">
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
                border: "1px solid #000000",
                marginRight: theme.spacing(1),
              }}
            />
          ))}
        </Box>
      </Box>
    ))}
    </Box>
  };

  return (
    <Box>
        <Carousel>
            {renderProjects()}
        </Carousel>
    </Box>
  );
};

export default ProjectCarousel;
