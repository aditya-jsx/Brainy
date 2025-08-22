  // import { Toaster } from "sonner";
  // import type { Metadata } from "next";
  // import { Geist, Geist_Mono } from "next/font/google";

  // import { ThemeProvider } from "@/components/providers/theme-provider";
  // import { ConvexClientProvider } from "@/components/providers/convex-provider";
  // import { ModalProvider } from "@/components/providers/modal-provider";

  // import "./globals.css";
  // import { EdgeStoreProvider } from "@/lib/edgestore";

  // const geistSans = Geist({
  //   variable: "--font-geist-sans",
  //   subsets: ["latin"],
  // });

  // const geistMono = Geist_Mono({
  //   variable: "--font-geist-mono",
  //   subsets: ["latin"],
  // });

  // export const metadata: Metadata = {
  //   title: "Brainy",
  //   description: "Your Second Brain",
  //   icons: {
  //     icon: [
  //       {
  //         media: "(prefers-color-scheme: light)",
  //         url: "/notion-dark/.svg",
  //         href: "/logo/.svg",
  //       },{
  //         media: "(prefers-color-scheme: dark)",
  //         url: "/notion/notion-light.svg",
  //         href: "/logo/.svg",
  //       }
  //     ]
  //   }
  // };

  // export default function RootLayout({
  //   children,
  // }: Readonly<{
  //   children: React.ReactNode;
  // }>) {
  //   return (
  //     <html lang="en" suppressHydrationWarning>
  //       <body
  //         className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#1F1F1F]`}
  //       >
  //         <ConvexClientProvider>
  //           <EdgeStoreProvider>
  //             <ThemeProvider
  //               attribute="class"
  //               defaultTheme="system"
  //               enableSystem
  //               disableTransitionOnChange
  //               storageKey="brainy-theme-2"
  //             >
  //               <Toaster position="bottom-center" />
  //               <ModalProvider />
  //               {children}
  //             </ThemeProvider>
  //           </EdgeStoreProvider>
  //         </ConvexClientProvider>
  //       </body>
  //     </html>
  //   );
  // }



import { Toaster } from "sonner";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";

export const metadata: Metadata = {
  title: "Brainy",
  description: "Your Second Brain",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notion-light.svg",
        href: "/notion-light.svg",
      },{
        media: "(prefers-color-scheme: dark)",
        url: "/notion-dark.svg",
        href: "/notion-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark:bg-[#1F1F1F]`}
      >
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="brainy-theme-2"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}