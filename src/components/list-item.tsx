"use client";
import { useState } from "react";
import {
  ArchiveRestore,
  BookmarkIcon,
  Clock5,
  MailOpen,
  StarIcon,
  Trash2,
} from "lucide-react";
import { Button } from "./button";
import clsx from "clsx";
import { Checkbox } from "./checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ListItemProps {
  from: string;
  subject: string;
  onClick?: () => void;
  content: string;
}

export function ListItem(props: ListItemProps) {
  let [starred, setStarred] = useState(false);
  let [important, setImporant] = useState(false);
  const router = useRouter();
  let toggleImportant = () => {
    setImporant(!important);
  };
  let toggleStar = () => {
    setStarred(!starred);
  };
  return (
    <Link href="/inbox/mail">
      <div
        className="
              justify-even flex min-w-0 flex-1 
              cursor-pointer items-center 
              border-b border-input p-4 
              py-[10px]
              first-of-type:border-t hover:shadow-sm 
              hover:shadow-white
              [&_.action-btn-group]:hidden
              [&_.action-btn-group]:hover:flex
              [&_.datetime]:hover:hidden
              [&_button]:hover:border-primary-gray
              [&_svg]:hover:stroke-primary-gray
             "
      >
        <div className="flex items-center gap-4">
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="flex h-5 items-start"
          >
            <Checkbox />
          </div>
          <Button
            variant="rounded"
            size="sm"
            hover="rounded"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              toggleStar();
            }}
          >
            <StarIcon
              width={20}
              height={20}
              fill={clsx(starred ? "var(--gold-fill)" : "transparent")}
              color="var(--ggray)"
            />
          </Button>
          <Button
            className="hover:stroke-primary-gray"
            variant="rounded"
            size="sm"
            hover="rounded"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleImportant();
            }}
          >
            <BookmarkIcon
              width={20}
              height={20}
              fill={clsx(important ? "var(--gold-fill)" : "transparent")}
              color="var(--ggray)"
            />
          </Button>
        </div>
        <div className="mx-8 text-sm font-bold">{props.subject}</div>
        <div className="flex min-w-0 flex-1">
          <div className="line-clamp-1 max-w-full flex-shrink-0 overflow-hidden text-ellipsis text-sm font-bold text-white">
            {props.content}
          </div>
          <span className="mx-2"> - </span>
          <div className=" line-clamp-1 max-w-full overflow-hidden text-ellipsis text-sm text-white/50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum,
            minima eaque officia harum iure assumenda dolorum fugit optio
            tempora labore quam non sequi? Libero eligendi magnam modi numquam
            iure.
          </div>
        </div>

        <div className="datetime ml-auto text-xs font-bold">
          {new Date().toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div className="action-btn-group flex gap-5">
          <Button
            hover="rounded"
            variant="rounded"
            size="sm"
            className="[&_svg]:bg-white/50"
          >
            <ArchiveRestore height="20" width="20" />
          </Button>
          <Button hover="rounded" variant="rounded" size="sm">
            <Trash2 height="20" width="20" />
          </Button>
          <Button hover="rounded" variant="rounded" size="sm">
            <MailOpen height="20" width="20" />
          </Button>
          <Button hover="rounded" variant="rounded" size="sm">
            <Clock5 height="20" width="20" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
