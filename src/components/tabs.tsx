"use client";
import { useState } from "react";
import clsx from "clsx";
import { InboxIcon, TagIcon, Users } from "lucide-react";

const tabData = [
  { name: "Primary", icon: <InboxIcon /> },
  { name: "Promotions", icon: <TagIcon /> },
  { name: "Socials", icon: <Users /> },
];

export function Tabs() {
  const [selected, setSelected] = useState("Primary");
  return (
    <div className="tabs flex h-[56px] relative">
      {tabData.map((tab) => (
        <button
          onClick={() => {
            setSelected(tab.name);
          }}
          className={clsx(
            `
            flex items-center  gap-4 
            h-full border-white border-solid hover:bg-input max-w-[252px] w-full relative
            
          `,
            selected === tab.name
              ? `
                before:block before:absolute before:mx-4 before:h-[3px] before:bg-white
                before:bottom-0 before:left-0 before:right-0 before:rounded-tr-md before:rounded-tl-md`
              : "text-[var(--goffwhite)]"
          )}
        >
          <span className="mx-4">{tab.icon}</span>
          <span className="">{tab.name}</span>
        </button>
      ))}
    </div>
  );
}
