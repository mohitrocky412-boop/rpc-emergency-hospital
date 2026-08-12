import Link from 'next/link';
import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'signal';

const variants: Record<Variant, string> = {
  primary:
    'bg-teal-700 text-white hover:bg-teal-800 shadow-soft hover:shadow-lift',
  secondary:
    'bg-white text-teal-800 border border-teal-200 hover:border-teal-400 hover:bg-teal-50',
  ghost: 'bg-transparent text-ink-800 hover:bg-ink-100',
  signal: 'bg-signal-600 text-white hover:bg-signal-700 shadow-soft hover:shadow-lift',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  icon,
  className = '',
  external,
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] whitespace-nowrap';
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('https://wa.me')) {
      return (
        <a href={href} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? 'button'} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
