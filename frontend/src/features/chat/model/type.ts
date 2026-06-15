import type { Dayjs } from "dayjs";

export type MessageType = "manager" | "client" | "system";

export interface Message {
  id: string;
  type: MessageType;
  text: string;
  createdAt: Dayjs;
  isPinned: boolean;
}
