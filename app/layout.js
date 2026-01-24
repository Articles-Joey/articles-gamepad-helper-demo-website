// import { Geist, Geist_Mono } from "next/font/google";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

import "bootstrap/dist/css/bootstrap.min.css";

// import "./globals.css";
import "@/styles/index.scss";

import "@articles-media/articles-dev-box/dist/style.css";

import "@articles-media/articles-gamepad-helper/dist/articles-gamepad-helper.css";

// import SocketLogicHandler from "@/components/SocketLogicHandler";
import { Suspense } from 'react';
import GlobalClientModals from '@/components/UI/GlobalClientModals';
import DarkModeHandler from '@/components/UI/DarkModeHandler';
import LayoutClient from './layout-client';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Gamepad Helper Demo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>

        {/* <link
          rel="stylesheet"
          href={`${process.env.NEXT_PUBLIC_CDN}fonts/fontawsome/css/all.min.css`}
        /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Road+Rage&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Tiny5&display=swap" rel="stylesheet"></link>

      </head>

      <body
      // className={`${geistSans.variable} ${geistMono.variable}`}
      >

        <Suspense>
          {/* <SocketLogicHandler /> */}
          <GlobalClientModals />
          <DarkModeHandler />
          <LayoutClient />
        </Suspense>

        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
