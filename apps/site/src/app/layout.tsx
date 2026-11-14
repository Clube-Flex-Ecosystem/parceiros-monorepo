import '../shared/styles/globals.css';

import type { Metadata } from 'next';
import { Archivo, Martian_Mono, Onest } from 'next/font/google';

import { env } from '../shared/config/env';
import { NuqsProvider } from '../shared/providers/nuqs-provider';
import { QueryProvider } from '../shared/providers/query-provider';
import { ToastProvider } from '../shared/providers/toast-provider';

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  axes: ['wdth'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
  display: 'swap',
});

const martianMono = Martian_Mono({
  variable: '--font-martian-mono',
  subsets: ['latin'],
  display: 'swap',
});

const siteName = 'Parceiros Clube Flex';
const description =
  'Catálogo oficial de benefícios do Clube Flex: conheça os parceiros participantes, suas condições e os descontos de cada plano.';

export const metadata: Metadata = {
  metadataBase: new URL(env.PUBLIC_URL),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName,
    title: siteName,
    description,
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: siteName,
    description,
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: light)' },
      { url: '/logo-white.svg', type: 'image/svg+xml', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${onest.variable} ${martianMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <QueryProvider>
          <NuqsProvider>{children}</NuqsProvider>
        </QueryProvider>
        <ToastProvider />
      </body>
    </html>
  );
};

export default RootLayout;
