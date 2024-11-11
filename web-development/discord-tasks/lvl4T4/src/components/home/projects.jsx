import ProjectCard from "../projects/project-card";

function Projects() {
  let myProjects = [
    {
      name: "Help A Soul",
      source: "https://github.com/christo-zero-john/help-a-soul",
      live: "http://helpasoul.netlify.app/",
      description: "This is a project",
    },
    {
      name: "mu-companion",
      source: "https://github.com/christo-zero-john/mu-companion-webapp",
      live: "https://mu-companion.vercel.app/",
      description: "This is a project",
    },
    {
      name: "Bing Reward Points Miner",
      source:
        "https://github.com/christo-zero-john/bing-rewards-automator-website",
      live: "https://bing-rewards-automator-website.vercel.app/",
      description: "This is a project",
    },
    {
      name: "VS Code extension downloader",
      source:
        "https://github.com/christo-zero-john/vs-code-extension-downloader",
      live: "##",
      description: "This is a project",
    },
  ];

  return (
    <div>
      {" "}
      <div className="pt-10">
        <p className="text-center text-4xl text-cyan-400">Projects</p>
        <div className="grid grid-cols-3 w-full gap-10 pt-10" id="project">
          {myProjects.map((project, index) => {
            return (
              <div className="" key={index} >
                <ProjectCard data={project}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
