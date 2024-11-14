import "./App.css";
import Contact from "./components/home/contact";
import Hero from "./components/home/hero";
import NavBar from "./components/home/navbar";
import SkillCard from "./components/home/skillcard";
import Projects from "./components/home/projects";

function App() {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Firebase",
    "Bootstrap",
  ];

  const backend = ["Firebase"];
  const os = ["Linux", "Windows"];

  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <div className="flex flex-col items-center">
        <p className="text-center text-4xl text-cyan-400 p-10">Skills</p>
        <div className="grid grid-cols-3 w-full">
          <SkillCard skillset={frontend} title="FrontEnd" />
          <SkillCard skillset={backend} title="BackEnd" />
          <SkillCard skillset={os} title="OS" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center text-4xl text-cyan-400 p-10">Contact</p>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
