import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Programmer | Andrés R. W.",
  description: `Aqui mi portafolio de habilidades tecnicas 
               y proyectos realizados`,
  openGraph:{
    title: "Programmer | Andrés R. W.",
    description: `Aqui mi portafolio`,
    images: ['/ceo.jpg']
  },
  twitter:{
    title: "Programmer | Andrés R. W.",
    description: `Aqui`,
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
