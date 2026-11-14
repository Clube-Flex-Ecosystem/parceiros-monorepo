import '../shared/styles/globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { env } from '../shared/config/env';
import { NuqsProvider } from '../shared/providers/nuqs-provider';
import { QueryProvider } from '../shared/providers/query-provider';
import { ToastProvider } from '../shared/providers/toast-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <QueryProvider>
          <NuqsProvider>{children}</NuqsProvider>
        </QueryProvider>
        <ToastProvider />
      </body>
    </html>
  );
};

export default RootLayout;
