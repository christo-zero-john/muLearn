import { FiSend } from "react-icons/fi";
export default function NavBar() {
  return (
    <div className="w-screen p-5 absolute">
      <div className="flex items-center justify-between">
        <div className="flex gap-10 items-center text-lg">
          <a href="##">
            <p className="text-xl italic">Tesnic</p>
          </a>
          <a href="#skills">
            <p>Skills</p>
          </a>
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href="#contact">
            <p>Contact me</p>
          </a>
        </div>
        <div className="text-lg">
          <a
            href="/resume"
            className="flex gap-2 items-center"
          >
            <FiSend />
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
