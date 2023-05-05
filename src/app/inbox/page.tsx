import { SettingsNav } from "@/components/settingsnav";
import { Tabs } from "@/components/tabs";
import clsx from "clsx";
import { BookmarkIcon, StarIcon } from "lucide-react";

export default function Inbox() {
  return (
    <div>
      <>
        {/* ABOVE TABS UI BUTTONS */}
        <SettingsNav />
        {/* TABS */}
        <Tabs />
        {/* TAB CONTENT */}
        <div className="flex flex-col">
          {Array(10)
            .fill("*")
            .map((_) => (
              <div
                className="
                flex flex-1 py-[10px] items-center 
                justify-even p-4 
                first-of-type:border-t border-b border-input 
                cursor-pointer
               hover:shadow-white hover:shadow-sm 
                min-w-0
               "
              >
                <div className="flex gap-4">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div>
                    <StarIcon
                      fill={clsx(false ? "var(--gold-fill)" : "transparent")}
                      color="var(--ggray)"
                    />
                  </div>
                  <div>
                    <BookmarkIcon
                      fill={clsx(false ? "var(--gold-fill)" : "transparent")}
                      color="var(--ggray)"
                    />
                  </div>
                </div>
                <div className="mx-8">The subject</div>
                <div className="min-w-0 flex-1">
                  <div className="line-clamp-1 overflow-hidden text-ellipsis max-w-full">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat harum repellat hic quam accusantium, pariatur nostrum
                    voluptatum sunt iusto velit deleniti quos maxime sapiente,
                    dignissimos nesciunt, natus tempore optio. Id?
                  </div>
                </div>

                <div className="ml-auto">{new Date().toLocaleTimeString()}</div>
              </div>
            ))}
        </div>
      </>
    </div>
  );
}
