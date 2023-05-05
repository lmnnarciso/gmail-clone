"use client";
import clsx from "clsx";
import { Grip } from "lucide-react";
import { useState } from "react";

export function AppsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative flex items-center">
      <button onClick={toggle}>
        <Grip />
      </button>
      {isOpen && (
        <div
          className={clsx(
            `z-1 bg-white rounded-md absolute left-[-165px] top-[45px] 
            min-w-[250px] max-w-[250px] h-[250px]`
          )}
        ></div>
      )}
    </div>
  );
}
