import { Box, Grid } from "@mui/material";
import React from "react";
import ExploreProject from "./ExploreProject";
import Footer from "./Footer";
import KeyAchievements from "./KeyAchievements";
import ProjectCarousel from "./ProjectCarousel";
import UpcomingEvents from "./UpcomingEvents";
import YourCauses from "./YourCauses";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FolderIcon from '@mui/icons-material/Folder';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
const mockCauses = [
  {
    title: "Clean Water for Everyone",
    subtitle: "Join our mission to provide clean water to communities in need",
    image: "/cause-1.jpg",
  },
  {
    title: "Plant Trees to Combat Climate Change",
    subtitle: "Join us in planting trees to reduce carbon emissions and combat climate change",
    image: "/cause-2.jpg",
  },
  {
    title: "Provide Education for Children in Need",
    subtitle: "Help us provide education to children who don't have access to it",
    image: "/cause-3.jpg",
  },
];

const mockProjects = [
  {
    title: "Clean Water for Everyone",
    subtitle: "Join our mission to provide clean water to communities in need",
    image: "/clean-water.jpg",
    sdg: "SDG6",
    policy: "policy1",
  },
  {
    title: "Plant Trees to Combat Climate Change",
    subtitle: "Join us in planting trees to reduce carbon emissions and combat climate change",
    image: "/plant-trees.jpg",
    sdg: "SDG13",
    policy: "policy2",
  },
  {
    title: "Provide Education for Children in Need",
    subtitle: "Help us provide education to children who don't have access to it",
    image: "/education.jpg",
    sdg: "SDG4",
    policy: "policy1",
  },
  {
    title: "Reduce Plastic Waste in Oceans",
    subtitle: "Join us in cleaning up plastic waste in oceans around the world",
    image: "/plastic-waste.jpg",
    sdg: "SDG14",
    policy: "policy2",
  },
  {
    title: "End Homelessness in Cities",
    subtitle: "Help us provide housing and support for homeless people in urban areas",
    image: "/homelessness.jpg",
    sdg: "SDG1",
    policy: "policy1",
  },
  {
    title: "Promote Renewable Energy",
    subtitle: "Join us in promoting the use of renewable energy sources to combat climate change",
    image: "/renewable-energy.jpg",
    sdg: "SDG7",
    policy: "policy2",
  },
];

const mockEvents = [
  {
    date: "12 MAR",
    title: "Community Cleanup Day",
    location: "Bangkok, Thailand",
  },
  {
    date: "23 MAR",
    title: "Plant Trees at the Park",
    location: "Quezon City, Philippines",
  },
  {
    date: "28 MAR",
    title: "Beach Cleanup at Waikiki",
    location: "Honolulu, Hawaii",
  },
  {
    date: "04 APR",
    title: "Volunteer at the Food Bank",
    location: "Los Angeles, California",
  },
  {
    date: "12 APR",
    title: "Fundraiser for Children's Hospital",
    location: "New York, New York",
  },
  {
    date: "19 APR",
    title: "Help Build a School in Kenya",
    location: "Nairobi, Kenya",
  },
];

const mockAchievements = [
  {
    title: "Volunteers",
    count: 1000,
    icon: <EmojiPeopleIcon />,
  },
  {
    title: "Projects",
    count: 500,
    icon: <FolderIcon />,
  },
  {
    title: "Communities",
    count: 50,
    icon: <LocationCityIcon />,
  },
  {
    title: "Donations",
    count: 100000,
    icon: <AttachMoneyIcon />,
  },
  {
    title: "Hours Volunteered",
    count: 2000,
    icon: <AccessTimeFilledIcon />,
  },
  {
    title: "Impact",
    count: 1000000,
    icon: <EnergySavingsLeafIcon />,
  },
];




const Landing: React.FC = () => {

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{
                backgroundImage: `url('https://dummyimage.com/1240x960/000/fff')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "calc(100vh)", // subtract the height of the app bar
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
          }} />
        </Grid>
        <Grid item xs={12}>
          <ProjectCarousel />
        </Grid>
        <Grid item xs={12}>
          <YourCauses causes={mockCauses} />
        </Grid>
        <Grid item xs={12}>
          <ExploreProject projects={mockProjects} />
        </Grid>
        <Grid item xs={12}>
          <UpcomingEvents events={mockEvents} />
        </Grid>
        <Grid item xs={12}>
          <KeyAchievements achievements={mockAchievements} />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
        </Grid>
      </div>
    );
};

export default Landing;

