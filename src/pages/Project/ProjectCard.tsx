import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  maxWidth: 345,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  },
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

const StyledTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

const StyledDescription = styled(Typography)({
  fontSize: "1rem",
  marginBottom: "1rem",
});

const StyledChip = styled(Chip)({
  marginRight: "8px",
  marginBottom: "8px",
});

interface ProjectCardProps {
  title: string;
  description: string;
  mayorPolicy: string[];
  sdg: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  mayorPolicy,
  sdg,
}) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledCardContent>
      <CardContent>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          Mayor Policy:
        </Typography>
        <div>
          {mayorPolicy.map((policy) => (
            <StyledChip label={policy} variant="outlined" key={policy} />
          ))}
        </div>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          SDG:
        </Typography>
        <div>
          {sdg.map((goal) => (
            <StyledChip label={goal} variant="outlined" key={goal} />
          ))}
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard;
