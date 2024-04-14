import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  UIProvider,
  colorModeManager,
  ColorModeScript,
} from "@yamada-ui/react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='ja'>
        <head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icon-384x384.png'></link>
          <meta name='theme-color' content='#b8e986' />
        </head>

        <body className={inter.className}>
          <ColorModeScript type='cookie' nonce='testing' />
          <UIProvider colorModeManager={{ ...colorModeManager }.cookieStorage}>
            {children}
          </UIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
