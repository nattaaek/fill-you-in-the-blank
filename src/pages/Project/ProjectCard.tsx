import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  mayorPolicy: string;
  sdg: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  mayorPolicy,
  sdg,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Mayor Policy: {mayorPolicy}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          SDG: {sdg}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
