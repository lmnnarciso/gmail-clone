import { Inter } from "next/font/google";
import { SettingsNav } from "@/components/settingsnav";
import { Tabs } from "@/components/tabs";
import { ListItem } from "@/components/list-item";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* ABOVE TABS UI BUTTONS */}
      <SettingsNav />
      {/* TABS */}
      <Tabs />
      {/* TAB CONTENT */}
      <div className="flex flex-col">
        {Array(10)
          .fill("*")
          .map((_, idx) => (
            <ListItem key={idx} subject="The subject" content="Lorem Ipsum" />
          ))}
      </div>
    </>
  );
}
