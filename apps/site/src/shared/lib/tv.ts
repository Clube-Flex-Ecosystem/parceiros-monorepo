import { createTV } from 'tailwind-variants';

import { twMerge } from './cn';

/*
 * Instância do tailwind-variants usando o mesmo tailwind-merge de `cn`, já
 * estendido com os tokens do design system.
 */
const tv = createTV({ twMerge });

export { tv };
export type { VariantProps } from 'tailwind-variants';
