export default function ProjectCard({ data }) {
  let project = data;
  console.log(project);
  return (
    <div className="border-2 border-gray-500 rounded-lg w-fit max-w-80 flex flex-col gap-5 mx-auto p-5 justify-between">
      <div className="object-cover">
        <img
          src="/projects.jpeg"
          alt="project app"
          className="object-cover h-40 w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{project.name}</p>
        <p>{project.description}</p>
      </div>
      <div className="flex justify-between">
        <button className="p-2 border-2 border-gray-500 rounded-md hover:bg-gray-700">
          <a href={project.source}>Github</a>
        </button>
        <button className="p-2 border-2 border-gray-500 rounded-md hover:bg-gray-700">
          <a href={project.live}>Host</a>
        </button>
      </div>
    </div>
  );
}
