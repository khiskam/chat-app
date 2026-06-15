import { MessageLayout } from "./message-layout";
import type { ManagerMessageProps } from "./type";

export const ManagerMessage = ({ message }: ManagerMessageProps) => {
  return (
    <MessageLayout message={ message } containerCn="justify-end" />
  );
};
