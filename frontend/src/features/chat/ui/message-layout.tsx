import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/shared/ui/card";
import { cn } from "@/shared/util/cn";

import { ActionsBar } from "./action-bar";
import type { MessageLayoutProps } from "./type";

export const MessageLayout = ({
  message: {
    text, type, createdAt, isPinned,
  }, containerCn,
}: MessageLayoutProps) => {
  return (
    <div className={ cn("grid pb-3", containerCn) }>
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>
            { type[0].toUpperCase() + type.slice(1) }
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            { text }
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <ActionsBar isPinned={ isPinned } />
          <p>
            { createdAt.format("DD.MM.YYYY") }
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
