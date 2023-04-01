import { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { projectData } from "./Project";
import ProjectCard from "./ProjectCard";



const ProjectDetail: React.FC = () => {
  const { id } = useParams<string>();

  const project = projectData.find((project) => project.id === Number(id));
  const [showDialog, setShowDialog] = useState<boolean>(false);

  if (project == null) {
    return <Typography>Project not found.</Typography>;
  }

  const handleRegisterClick = (): void => {
    setShowDialog(true);
  };

  const handleDialogClose = (): void => {
    setShowDialog(false);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          {project.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <ProjectCard
                      title={project.title}
                      description={project.description}
                      mayorPolicy={project.mayorPolicy}
                      sdg={project.sdg} currentVolunteers={0} maxVolunteers={0}          />
        </Box>
        <Typography variant="body1">{project.description}</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={handleRegisterClick}>
            Register
          </Button>
        </Box>
        <Dialog open={showDialog} onClose={handleDialogClose}>
          <DialogTitle>Registration Complete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Thank you for registering for {project.title} project. We will get
              in touch with you shortly.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>OK</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default ProjectDetail;
