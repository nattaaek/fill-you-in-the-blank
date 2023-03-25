import { Box, Chip } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import theme from "../../common/theme/theme";

const projects = [
  {
    id: 1,
    name: "Autism Run",
    organizer: "A community-driven event that raises awareness and funds for autism support, research, and education. The event includes marathons, walks, and family-friendly activities.",
    date: "April 12",
    img: "/autismrun.jpg",
    tags: ["สร้างสรรค์ดี", "สิ่งแวดล้อมดี", "SDG 3"],
  },
  {
    id: 2,
    name: "Project X",
    organizer: "A global environmental initiative focused on reducing carbon emissions by promoting sustainable practices, clean technology, and efficient resource management.",
    date: "Apr 23",
    img: "/projectx.png",
    tags: ["สิ่งแวดล้อมดี", "SDG 13"],
  },
  {
    id: 3,
    name: "Team Alpha",
    organizer: "A youth empowerment project that offers leadership training, mentorship, and resources for personal and professional development to underprivileged adolescents.",
    date: "May 7",
    img: "/teamalpha.png",
    tags: ["เรียนดี", "SDG 4", "SDG 8"],
  },
];

const ProjectCarousel = (): JSX.Element => {

  const renderProjects = (): JSX.Element[] => {
    return projects.map((project) => (
      <Box key={project.name} sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "1000px",
        backgroundImage: `url(${project.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        bacgkroundPosition: "center",
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        borderRadius: "8px",
        boxShadow: "0px 3px 6px #00000029",
      }}>
        <Box sx={{
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          padding: theme.spacing(2),
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
      </Box>
    ));
  };

  return (
    <Box data-testid="project-carousel">
        <Carousel>
            {renderProjects()}
        </Carousel>
    </Box>
  );
};

export default ProjectCarousel;
