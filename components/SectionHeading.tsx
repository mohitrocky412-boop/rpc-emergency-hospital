export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`mt-3 font-display text-3xl font-medium leading-tight text-ink-900 sm:text-4xl ${eyebrow ? '' : ''}`}>
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">{description}</p>}
    </div>
  );
}
