"use client";
import clsx from "clsx";
import { Clock, File, Inbox, Pencil, Send, Star } from "lucide-react";
import { useState } from "react";

const NavList = [
  {
    name: "Inbox",
    icon: <Inbox />,
  },
  { name: "Starred", icon: <Star /> },
  { name: "Snoozed", icon: <Clock /> },
  { name: "Sent", icon: <Send /> },
  { name: "Drafts", icon: <File /> },
];

export function SideNav({ isOpen }: { isOpen: boolean }) {
  const [selected, setSelected] = useState("Inbox");
  return (
    <nav className="grid-in-sidebar h-full text-[var(--gwhite)] ">
      <div className="flex items-center pl-4 my-8">
        <button
          className={clsx(
            `flex items-center gap-2 text-black transition-[min-width, width, flex-grow, flex-shrink, padding] duration-150
            bg-white rounded-2xl h-[56px]`,
            isOpen ? "min-w-[56px] px-0 gap-0" : "px-6 min-w-[96px] w-auto"
          )}
        >
          <span className="mx-auto">
            <Pencil width={24} height={24} />
          </span>
          {isOpen ? "" : "Compose"}
        </button>
      </div>
      <ul className="list-none flex flex-col mt-8 overflow-hidden">
        {NavList.map((item) => (
          <li
            key={item.name}
            className={clsx(
              `
              flex 
              justify-start
              hover:bg-hovered 
              transition-[padding, border-radius, width, background, margin]
              duration-150
              h-[40px] p-2 my-1
              `,
              isOpen
                ? "mx-auto rounded-full"
                : `w-[90%] 
              pl-[26px] 
              pr-[12px]
              rounded-r-full`,
              selected === item.name ? "bg-selected" : ""
            )}
          >
            <button
              onClick={() => {
                setSelected(item.name);
              }}
              className="text-start bg-transparent w-full border-r-lg flex gap-6 items-center"
            >
              <span>{item.icon}</span>
              {!isOpen && item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
