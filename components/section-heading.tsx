export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-sm text-muted-foreground">
        <span aria-hidden className="h-0.5 w-6 bg-primary" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-[-0.02em] text-balance md:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-lg leading-7 text-muted-foreground">{children}</p>}
    </div>
  );
}
