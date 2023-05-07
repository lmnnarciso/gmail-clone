import Link from "next/link";
import { Button } from "./button";
import {
  ArchiveRestore,
  ArrowLeft,
  CheckCircle,
  Clock5,
  FolderSymlink,
  MoreVertical,
  Tag,
  Trash2,
  XOctagon,
} from "lucide-react";
import Mail from "@/app/inbox/mail/page";

export function MailNav() {
  return (
    <div className="flex h-[48px] items-center px-[16px] text-primary-gray">
      <Link href="/inbox">
        <Button variant="rounded" buttonType="icon">
          <ArrowLeft />
        </Button>
      </Link>
      <Button variant="rounded" buttonType="icon">
        <ArchiveRestore />
      </Button>
      <Button variant="rounded" buttonType="icon">
        <XOctagon />
      </Button>
      <Button variant="rounded" buttonType="icon">
        <Trash2 />
      </Button>
      <Button variant="rounded" buttonType="icon">
        <Mail />
      </Button>
      <Button variant="rounded" buttonType="icon">
        <Clock5 />
      </Button>
      <Button variant="rounded" buttonType="icon">
        <CheckCircle />
      </Button>
      <Button variant="rounded" buttonType="icon">
        <FolderSymlink />
      </Button>
      <Button variant="rounded" buttonType="icon">
        <Tag />
      </Button>
      <Button variant="rounded" buttonType="icon">
        <MoreVertical />
      </Button>
    </div>
  );
}
