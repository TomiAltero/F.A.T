import type { Metadata } from "next";
import SideBar from "@/components/nav-bar";
import "@/app/globals.css";
import { opensans } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "Down Is Up",
  description:
    "We are an non-profit organization that helps kids with Down Syndrome",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${opensans.className} h-[100vh] text-2xl`}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
