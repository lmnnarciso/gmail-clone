import clsx from "clsx";
import {
  ChevronDownSquare,
  ChevronLeft,
  ChevronRight,
  Keyboard,
} from "lucide-react";

export function SettingsNav() {
  return (
    <div className="flex h-[48px] items-center px-[16px] text-primary-gray">
      {/* checkbox dropdown group */}
      <div className="flex items-center">
        <label className="h-full p-2 hover:bg-input cursor-pointer rounded-sm">
          <input
            type="checkbox"
            className={clsx(
              "relative accent-red-500 appearance-bg-red-500",
              "cursor-pointer",
              "before:content-none before:absolute before:inset-0 before:opacity-0 before:scale-0 before:rounded-1/2 ",
              "hover:before:scale-[3] hover:before:opacity-[0.1] hover:before:transition-opacity hover:before:duration-300",
              "after:content-none after:absolute after:inset-0 after:scale-[3]"
            )}
          />
        </label>
        <button>
          <ChevronDownSquare />
        </button>
      </div>
      <div className="flex ml-auto text-xs items-center">
        <div>
          <span>1 - 50</span>
          <span> of </span>
          <span>9999</span>
        </div>
        <div className="flex items-center">
          <button>
            <ChevronLeft />
          </button>
          <button>
            <ChevronRight />
          </button>
          <button>
            <Keyboard />
          </button>
          <button className="h-full p-2">
            <ChevronDownSquare height="14px" width="14px" />
          </button>
        </div>
      </div>
    </div>
  );
}
