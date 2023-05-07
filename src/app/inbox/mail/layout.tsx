import { Inter } from "next/font/google";
import { Button } from "@/components/button";
import {
  ArchiveRestore,
  ArrowLeft,
  CheckCircle,
  Clock5,
  FolderSymlink,
  Mail,
  MoreVertical,
  Tag,
  Trash,
  Trash2,
  XOctagon,
} from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gmail Clone",
  description: "Gmail Clone by Migs",
};

export default function MailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
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
      {children}
    </div>
  );
}
