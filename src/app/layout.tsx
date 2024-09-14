import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Programmer | Andrés R. W.",
  description: `Aqui mi portafolio de habilidades tecnicas 
               y proyectos realizados`,
  openGraph:{
    title: "Programmer | Andrés R. W.",
    description: `Aqui mi portafolio de habilidades tecnicas`,
    images: ['/ceo.jpg']
  }
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
