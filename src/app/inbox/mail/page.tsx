import { Button } from "@/components/button";
import clsx from "clsx";
import { Star, StarIcon } from "lucide-react";
import Image from "next/image";

export default function Mail() {
  return (
    <div className="flex flex-1 flex-col bg-white pr-4 text-black">
      <div className="pb-2 pl-16 pt-5 text-2xl">
        <h2>Subject Mail Header</h2>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex pt-5">
          <div className="flex h-20 items-center px-4">
            <Image
              src="/unnamed.png"
              width="40"
              height="40"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center ">
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-bold">Leandro Miguel Narciso</p>
              <div className="flex items-center gap-5">
                <span className="text-xs text-secondary-gray">
                  May 5, 2023, 5:28 PM (2 days ago)
                </span>
                <Button
                  className=""
                  variant="rounded"
                  size="sm"
                  hover="rounded-dark"
                >
                  <StarIcon
                    width={16}
                    height={16}
                    fill={clsx("transparent")}
                    color="var(--ggray)"
                  />
                </Button>
              </div>
            </div>
            <div>Mail message</div>
          </div>
        </div>
      </div>
    </div>
  );
}
