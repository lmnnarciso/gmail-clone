import {
  Grip,
  HelpCircle,
  Menu,
  SearchIcon,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import { AppsDropdown } from "./apps-dropdown";
import { useEffect } from "react";

interface NavbarProps {
  isOpen: boolean;
  toggle: () => void;
}

export function Navbar({ isOpen, toggle }: NavbarProps) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.setProperty("--nav-width", "4.5rem");
    } else {
      document.documentElement.style.setProperty("--nav-width", "16rem");
    }
  }, [isOpen]);

  return (
    <header className="grid-in-header flex items-center p-4 px-8 gap-4">
      <div className="flex items-center max-w-[256px] flex-1 justify-start gap-8">
        <button onClick={toggle}>
          <Menu height="24" width="24" />
        </button>
        <Image src="/gmail.png" alt="Gmail Logo" width="109" height="40" />
      </div>
      <div className="flex items-center justify-between flex-1 gap-4">
        <div className="flex flex-1 justify-between">
          <div className="rounded-lg w-full max-w-[720px]">
            <form className="rounded-lg bg-input h-[46px] flex items-center gap-8 px-4 ">
              <SearchIcon />
              <input
                type="text"
                className="bg-transparent p-1 rounded-lg  w-full"
              />
              <SlidersHorizontal />
            </form>
          </div>
          <div className="flex gap-4">
            <button>
              <HelpCircle />
            </button>
            <button>
              <Settings />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <AppsDropdown />
          <button className="h-[30px]">
            <Image
              src="/unnamed.png"
              width="30"
              height="30"
              alt="avatar"
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
