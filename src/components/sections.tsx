type Title = { icon: React.JSX.Element; name: string };

interface Props {
  title?: Title;
  id: `#${string}`;
  children: React.ReactNode;
}

const Projects: React.FC<Props> = ({ title, id, children }) => {
  const sectionTitle = (
    <h2 className="mb-5 flex gap-x-2 place-items-center font-Onest font-extrabold text-blue-100 text-2xl md:text-3xl lg:text-4xl">
      {title?.name ? title.icon : ""}
      {title?.name ? title.name : ""}
    </h2>
  );
  return (
    <section className="max-w-[1000px] mx-auto p-4" id={id}>
      {sectionTitle}
      {children}
    </section>
  );
};

export default Projects;
