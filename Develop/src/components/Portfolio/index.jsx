import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'readMeCreator',
      description: 'Command-line Application',
      link: "https://github.com/angiethelibrarian/Professional-README-Creator",
      repo: "https://github.com/angiethelibrarian/Professional-README-Creator"
    },
    {
      name: 'partyPlanner',
      description: 'Interactive Front-End',
      link: "https://angiethelibrarian.github.io/Party-Planner-Project1/",
      repo: "https://github.com/angiethelibrarian/Party-Planner-Project1"
    },
    {
      name: 'vehicleBuilder',
      description: 'Typescript',
      link: "https://github.com/angiethelibrarian/Professional-Vehicle-Builder",
      repo: "https://github.com/angiethelibrarian/Professional-Vehicle-Builder"
    },
    {
      name: 'fullStackForum',
      description: 'Full Stack Application',
      link: "https://github.com/angiethelibrarian/FullStackForum",
      repo: "https://github.com/angiethelibrarian/FullStackForum"
    },
    {
      name: 'cmsEmployeeTracker',
      description: 'SQL',
      link: "https://github.com/angiethelibrarian/CMS-Employee-Tracker",
      repo: "https://github.com/angiethelibrarian/CMS-Employee-Tracker"
    },
  ]);
console.log(projects);
  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
