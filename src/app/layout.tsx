import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Box, Stack } from "@chakra-ui/react";
import "./globals.css";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Provider } from "@/components/ui/provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jason Smith",
  description: "Jason Smith's personal website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <Box
            minH="100dvh"
            display="flex"
            flexDirection="column"
            pb="calc(env(safe-area-inset-bottom, 0px) + 4.5rem)"
          >
            {children}
          </Box>
          <Stack
            position="fixed"
            bottom="0"
            insetX="0"
            zIndex="docked"
            direction="row"
            justify="center"
            align="center"
            pt={2}
            pb="calc(env(safe-area-inset-bottom, 0px) + 0.75rem)"
            pointerEvents="none"
          >
            <Box pointerEvents="auto">
              <ColorModeButton />
            </Box>
          </Stack>
        </Provider>
      </body>
    </html>
  );
}
