export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-cream">
      <div
        className="absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 0%, rgba(15,125,114,0.12), transparent 45%)',
        }}
        aria-hidden
      />
      <div className="container-hospital py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[1.1] text-ink-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
