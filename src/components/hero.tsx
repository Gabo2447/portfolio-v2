import data from "@/data.json";
import { CiMail, CiLinkedin } from "react-icons/ci";

import Section from "@/components/sections";

const Hero: React.FC = () => {
  const description = data.description.split(".");
  return (
    <Section
      id="start"
      className="text-neutral-100 flex flex-col max-w-[750px] mx-auto my-8"
    >
      <picture className="flex gap-x-4 place-items-center">
        <img
          src={data.avatar}
          alt={`Imagen del avatar de ${data.name}`}
          className="rounded-full size-12 md:size-14 lg:size-16"
        />
      </picture>
      <h1 className="my-3 py-1 bg-linear-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent font-extrabold font-Onest text-3xl md:text-4xl lg:text-5xl">
        Hey, soy {data.name}
      </h1>
      <p className="max-w-[600px] md:text-lg lg:text-xl mb-6">
        {description[0]}.
        <span className="text-amber-200 font-semibold md:font-bold">
          {description[1]}.
        </span>{" "}
        {description[2]}. {description[3]}
      </p>
      <ul className="flex gap-x-4 items-center">
        <li className="border border-cyan-400/20 px-4 py-1 w-fit rounded-full bg-cyan-700/40 hover:border-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 transition">
          <a
            className="flex gap-x-2 place-items-center"
            href={`mailto:${data.correo}`}
          >
            <CiMail />
            Contactame
          </a>
        </li>
        <li className="border border-cyan-400/20 px-4 py-1 w-fit rounded-full bg-cyan-700/40 hover:border-neutral-400 hover:bg-neutral-200 hover:text-cyan-900 transition">
          <a className="flex gap-x-2 place-items-center" href={data.linkedIn}>
            <CiLinkedin /> LinkedIn
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default Hero;
