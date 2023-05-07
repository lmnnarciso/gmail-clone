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
    <div className="tabs relative flex h-[56px]">
      {tabData.map((tab) => (
        <button
          key={tab.name}
          onClick={() => {
            setSelected(tab.name);
          }}
          className={clsx(
            `
            relative flex  h-full 
            w-full max-w-[252px] items-center gap-4 border-solid border-white hover:bg-input
            
          `,
            selected === tab.name
              ? `
                before:absolute before:bottom-0 before:left-0 before:right-0 before:mx-4
                before:block before:h-[3px] before:rounded-tl-md before:rounded-tr-md before:bg-white`
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
