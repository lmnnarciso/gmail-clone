import { SideNav } from "@/components/sidenav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { NavGroup } from "@/components/navgroup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gmail Clone",
  description: "Gmail Clone by Migs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="grid h-full grid-cols-layout grid-rows-layout grid-areas-layout">
          <NavGroup />
          <div className="flex h-full p-4 grid-in-content">
            <div className="h-full flex-1 rounded-2xl bg-content">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
