import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/*
 * Registra os tokens customizados do design system (src/shared/styles/tokens.css)
 * para que o tailwind-merge resolva conflitos corretamente. Sem isso, por
 * exemplo, `text-discount` seria tratado como cor e não substituiria `text-sm`.
 */
const twMerge = extendTailwindMerge<'button-surface'>({
  extend: {
    theme: {
      text: ['2xs', 'discount', 'display'],
      tracking: ['caps'],
      spacing: [
        'gutter',
        'section',
        'stack',
        'header',
        'sidebar',
        'control-sm',
        'control-md',
        'control-lg',
        'icon-xs',
        'icon-sm',
        'icon-md',
        'icon-lg',
      ],
      container: ['prose', 'form', 'content', 'wide'],
      radius: ['pill'],
      shadow: [
        'focus',
        'button-primary',
        'button-primary-pressed',
        'button-secondary',
        'button-secondary-pressed',
      ],
      'inset-shadow': ['well'],
      'drop-shadow': ['ticket', 'illustration'],
      'text-shadow': ['emboss', 'emboss-light'],
      ease: ['flex'],
      animate: [
        'fade-in',
        'fade-out',
        'rise-in',
        'scale-in',
        'dash-in',
        'stamp',
        'shimmer',
        'pulse-dot',
      ],
      breakpoint: ['xs'],
    },
    classGroups: {
      'button-surface': ['button-primary', 'button-secondary'],
    },
  },
});

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn, twMerge };
