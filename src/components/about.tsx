import data from "@/data.json";
import { HiUser } from "react-icons/hi2";

const About: React.FC = () => {
  const description = data.about.split("<br/>");
  return (
    <section className="max-w-[1000px] mx-auto p-4 my-8" id="about">
      <h2 className="font-extrabold font-Onest text-2xl md:text-3xl lg:text-4xl text-blue-100 flex gap-x-2 place-items-center mb-5">
        <HiUser />
        Sobre mí
      </h2>
      <div className="flex max-w-[1000px] justify-between lg:flex-row-reverse lg:min-w-[1000px] flex-col gap-y-8 items-center">
        <img
          src="https://imgs.search.brave.com/_GDDtqr7Xp-PwwW7xTc11-dUyXMtLRIitLY2DDpIl_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MzMxOTkyNi9lcy9m/b3RvL2ZvdG8tc2Vn/bmFsZXRpY2hlLWNp/bWl0ZXJvLWFjYXR0/b2xpY28tdmlhLWNh/aW8tY2VzdGlvLXJv/bWEtcm9tZS1pdGFs/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SW5DZFpyTU1R/Yzh4UkhLTmc3Rkxv/clI5bDFKeTBNbl9J/YzVYRGNDamd4TT0"
          alt="avatar"
          className="object-cover aspect-square max-w-[250px] h-[250px] rounded-xl rotate-5 ring-4 ring-blue-600"
        />
        <div className="text-neutral-300 text-wrap max-w-[650px]">
          {description.map((info) => (
            <p className="text-neutral-300 text-wrap max-w-[650px]">
              {info}
              <br />
              <br />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
