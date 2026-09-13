type SectionLabelProps = {
  number: string;
  label: string;
};

const SectionLabel = ({ number, label }: SectionLabelProps) => {
  return (
    <div className="mb-16 flex items-center gap-4">
      <span className="shrink-0 font-mono text-xs tracking-widest text-muted">
        {number}
      </span>

      <div className="h-px min-w-0 flex-1 bg-border" />

      <span className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-muted">
        {label}
      </span>
    </div>
  );
};

export default SectionLabel;