import Landing, { LandingProps, Project } from './pages/Landing/Landing'

function App() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Clean Water Initiative",
      description: "Providing access to clean water for communities in need",
      policies: ["Water Conservation", "Water Treatment"],
      sdgs: ["SDG 6: Clean Water and Sanitation"]
    },
    {
      id: 2,
      name: "Community Health Program",
      description: "Improving the health of underprivileged communities through education and access to healthcare",
      policies: ["Healthcare Access", "Health Education"],
      sdgs: ["SDG 3: Good Health and Well-being"]
    },
    {
      id: 3,
      name: "Environmental Sustainability",
      description: "Promoting environmental sustainability through waste reduction and conservation efforts",
      policies: ["Waste Reduction", "Conservation"],
      sdgs: ["SDG 13: Climate Action", "SDG 14: Life Below Water"]
    }
  ];
 
  return (
    <div>
      <Landing projects={projects} />
    </div>
  )
}

export default App
