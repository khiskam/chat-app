import { MESSAGE_TYPE_MAP } from "./constant";
import type { MessageProps } from "./type";

export const Message = ({ message }: MessageProps) => {
  const { type } = message;
  const Component = MESSAGE_TYPE_MAP[type];

  return (
    <Component message={ message } />
  );
};
