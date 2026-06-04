type SectionLabelProps = {
  children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-5 inline-flex rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#05F2DB] backdrop-blur-xl">
      {children}
    </div>
  );
}
