import { Link, Pin } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/util/cn";

import type { ActionsBarProps } from "./type";

export const ActionsBar = ({ isPinned }: ActionsBarProps) => {
  const pinnedCn = cn("text-gray-500", { ["fill-current"]: isPinned });

  return (
    <div className="flex gap-1">
      <Button variant="ghost" className="cursor-pointer">
        <Link size="12" className="text-gray-500" />
      </Button>
      <Button variant="ghost" className="cursor-pointer">
        <Pin size="12" className={ pinnedCn } />
      </Button>
    </div>
  );
};
