import LinkIcon from "@mui/icons-material/Link";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
};

function CardProject({ project }: { project: Project }) {
  return (
    <div className="rounded-[20px] flex justify-between bg-[var(--card)] p-4 gap-1">
      <div className="flex flex-col text-start">
        <div className="pb-5">
          <h4 className="text-[var(--foreground)] text-2xl">{project.title}</h4>
          <span className="text-[var(--color-secondary)] text-sm">{project.subtitle}</span>
        </div>

        <div className="text-[var(--foreground)] text-md">
          {project.description}
        </div>
      </div>
      {/* Button */}
      <div className="flex flex-col justify-end group">
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-12 h-12 border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)] flex items-center justify-center transition-colors"
          aria-label="Acessar projeto"
        >
          <LinkIcon style={{ transform: "rotate(45deg)" }} />
        </a>
      </div>
    </div>
  );
}

export default CardProject;
