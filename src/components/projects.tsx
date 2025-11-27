import { FaCode } from "react-icons/fa";
import { FiGithub, FiLink } from "react-icons/fi";

import Section from "@/components/sections";
import type { CardPropsSchema } from "@/types/proyects";
import data from "@/data.json";

const projects: CardPropsSchema[] = data.proyectos as CardPropsSchema[];

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <h2 className="font-extrabold font-Onest text-2xl md:text-3xl lg:text-4xl text-blue-100 flex gap-x-2 place-items-center mb-5">
        <FaCode /> Projectos
      </h2>
      <ul className="flex flex-col gap-y-20">
        {projects.map((data) => (
          <li
            key={data.title}
            className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8"
          >
            <img
              src={data.img}
              alt={data.title}
              loading="lazy"
              className="aspect-video object-cover rounded-lg border border-blue-700/30"
            />
            <div>
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-blue-50 mb-3.5">
                {data.title}
              </h3>
              <ul className="flex gap-x-5">
                {data.frameworks.map((frameworkObj) => (
                  <li
                    key={frameworkObj.name}
                    className="flex gap-x-2 text-blue-50/70 text-sm place-items-center bg-neutral-700/30 px-4 py-0.5 rounded-full border border-neutral-500/25"
                  >
                    <img
                      src={frameworkObj.icon}
                      alt={frameworkObj.name}
                      loading="lazy"
                      className="size-7"
                    />
                    {frameworkObj.name}
                  </li>
                ))}
              </ul>
              <p className="line-clamp-3 my-3 text-neutral-400">
                {data.description}
              </p>
              <ul className="flex gap-x-3">
                {data.github ? (
                  <li>
                    <a
                      href={data.github}
                      className="px-3 py-1.5 bg-blue-900 rounded-lg flex place-items-center w-fit gap-x-3 text-neutral-100 text-lg hover:scale-105 active:scale-90 transition-transform duration-75"
                      target="_blank"
                      rel="nooreferrer noopener"
                    >
                      <FiGithub className="size-5" /> Codigo
                    </a>
                  </li>
                ) : null}
                {
                  <li>
                    <a
                      target="_blank"
                      rel="nooreferrer noopener"
                      href={data.preview}
                      className="px-3 py-1.5 flex place-items-center w-fit gap-x-3 text-lg border border-blue-600/50 text-cyan-700 rounded-lg"
                    >
                      <FiLink className="size-5" /> Vista previa
                    </a>
                  </li>
                }
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
export default Projects;
