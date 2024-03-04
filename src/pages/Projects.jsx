import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-300">
        <p>
          I've embarked on few projects throughout my journey, but these are the
          ones I hold closest to my heart. If you come across something that
          piques your interest fell free to explore codebase and contribute your
          ideas for further enhancements. Your collaboration is highly valued!
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl text-slate-200 font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-300">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-violet-500 flex items-center gap-2"
                >
                  Live Link
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain text-violet-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-400" />
      <CTA />
    </section>
  );
};

export default Projects;
