import LinkIcon from '@mui/icons-material/Link';

function CardProject() {
  return (
    <div className="rounded-[20px] flex justify-around bg-[var(--card)] p-4 gap-1">
      <div className="flex flex-col text-start">
        <div className="pb-5">
          <h4 className="text-[var(--foreground)]">Valfenda</h4>
          <span className="text-[var(--color-secondary)]">something</span>
        </div>

        <div className="text-[var(--foreground)]">
          Uma aplicação de biblioteca pessoal, criada em react e golang.
        </div>
      </div>
      {/*Buttons */}
      <div className="flex flex-col justify-end">
        <button className="rounded-full w-10 h-10 border border-[var(--border)] text-[var(--foreground)]">
          <LinkIcon />
        </button>
      </div>
    </div>
  );
}

export default CardProject;
