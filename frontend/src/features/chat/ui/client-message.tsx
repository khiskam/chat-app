import { MessageLayout } from "./message-layout";
import type { ClientMessageProps } from "./type";

export const ClientMessage = ({ message }: ClientMessageProps) => {
  return (
    <MessageLayout message={ message } containerCn="justify-start" />
  );
};
