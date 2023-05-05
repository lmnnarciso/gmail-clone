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
        <main className="grid grid-areas-layout grid-cols-layout grid-rows-layout h-full">
          <NavGroup />
          <div className="grid-in-content h-full flex p-4">
            <div className="flex-1 bg-content h-full rounded-2xl">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
