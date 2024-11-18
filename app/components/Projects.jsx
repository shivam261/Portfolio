import { PROJECTS } from "../constants";
import Image from "next/image";
const Projects = () => {
  return (
    <div>
      <h2 className="my-12 text-center text-2xl font-semmibold uppercase tracking-wide text-slate-200">
        Projects
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        {PROJECTS.map((project, index) => {
          return (
            <a key={index} href={project.url} target="_blank">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                className="rounded-3xl"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
