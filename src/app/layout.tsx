import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL('https://programmer.andresrw.com/'),
  title: "[ Andrés R.W. | Programmer ]",
  description: `Experiencias | Habilidades | Portafolio`,
  robots: 'index, follow',
  keywords: ['Andrés R.W.', 'Developer', 'Artist'],

  openGraph: {
    title: "[ Andrés R.W. | Programmer ]",
    description: `Experiencias | Habilidades | Portafolio`,
    images: ['/ceo.jpg'],
    emails: ['contact@andresrw.com'],
    type: 'profile',
    url: 'https://programmer.andresrw.com/',
    siteName: '[ Andrés R.W. | Programmer ]',
  },
  twitter: {
    title: "[ Andrés R.W. | Programmer ]",
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
      <body>
        {children}

      </body>
    </html>
  );
}


{
  /**
   * import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next';  
   
   <Analytics />
        <GoogleAnalytics gaId="G-R68HJR1C3Z" />
        <SpeedInsights />
   */
}