import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-foreground/80 max-w-3xl">{subtitle}</p>
      ) : null}
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}


