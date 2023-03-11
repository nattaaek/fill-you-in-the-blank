import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import theme from "../../common/theme/theme";

interface Achievement {
  title: string;
  count: number;
  icon: React.ReactNode;
}

interface KeyAchievementsProps {
  achievements: Achievement[];
}

const KeyAchievements = ({ achievements }: KeyAchievementsProps) => {
  return (
    <Box sx={{
        backgroundColor: "#f5f5f5",
        padding: theme.spacing(8, 0),
    }}>
      <Typography variant="h4" sx={{
            fontWeight: "bold",
            marginBottom: theme.spacing(4),
      }}>
        Key Achievements
      </Typography>

      <Grid container spacing={4}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
                    borderRadius: theme.spacing(1),
                    padding: theme.spacing(2),                
            }}>
              <Box sx={{
                  color: "#4caf50",
                  fontSize: 50,
                  marginBottom: theme.spacing(2),
              }}>{achievement.icon}</Box>
              <Typography variant="h6" sx={{
                    fontWeight: "bold",
                    marginBottom: theme.spacing(2),
              }}>
                {achievement.title}
              </Typography>
              <Typography variant="subtitle1" sx={{
                    fontSize: 24,
                    fontWeight: "bold",
              }}>
                {achievement.count}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyAchievements;
