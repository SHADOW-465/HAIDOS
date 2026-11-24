export function SectionIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-muted">{kicker}</p>
      {title ? (
        <h2 className="mt-3 max-w-2xl text-3xl text-balance md:text-[2.5rem]">{title}</h2>
      ) : null}
      {children ? (
        <p className="mt-4 max-w-2xl text-base leading-[1.6] text-body md:text-lg">{children}</p>
      ) : null}
    </div>
  );
}
