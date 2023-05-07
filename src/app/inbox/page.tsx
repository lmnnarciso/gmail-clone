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
                justify-even flex min-w-0 flex-1 
                cursor-pointer items-center 
                border-b border-input p-4 
                py-[10px]
               first-of-type:border-t hover:shadow-sm 
                hover:shadow-white
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
                  <div className="line-clamp-1 max-w-full overflow-hidden text-ellipsis">
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
