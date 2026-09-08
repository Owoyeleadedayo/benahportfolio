"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Transition from "@/components/transition/Transition";
import { TransitionProvider } from "@/context/TransitionContext";
import { DM_Sans, Sora } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${sora.className} ${dmSans.variable} antialiased`}
      >
        <TransitionProvider>
          <Header />
          <Transition>
            <div key={pathname}>{children}</div>
          </Transition>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
