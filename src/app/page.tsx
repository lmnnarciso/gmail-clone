import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-full w-full grid-areas-layout">
      <header className="grid-in-header"></header>
      <nav className="grid-in-sidebar"></nav>
      <div className="grid-in-content"></div>
    </main>
  );
}
