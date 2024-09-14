import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Programmer | Andrés R. W.",
  description: `Experiencias | Habilidades | Portafolio`,
  

  openGraph:{
    title: "Programmer | Andrés R. W.",
    description: `Experiencias | Habilidades | Portafolio`,
    images: ['/ceo.jpg'],
    emails: ['contact@andresrw.com'],
    type: 'profile',
    url: 'https://programmer.andresrw.com/',
    siteName: 'Programmer | Andrés R. W.',
  },
  twitter:{
    title: "Programmer | Andrés R. W.",
    description: `Experiencias | Habilidades | Portafolio`,
    site: '@andresrw_dev',
    images: ['/ceo.jpg'],
    creator: '@andresrw_dev',

  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
