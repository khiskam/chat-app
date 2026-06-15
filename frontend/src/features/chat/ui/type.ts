import type { HTMLAttributes } from "react";

import type { Message } from "../model/type";

export interface MessageProps { message: Message }

export type SystemMessageProps = MessageProps;
export type ClientMessageProps = MessageProps;
export type ManagerMessageProps = MessageProps;

export interface MessageLayoutProps {
  message: Message;
  containerCn: HTMLAttributes<HTMLDivElement>["className"];
}

export interface ActionsBarProps { isPinned: boolean }
