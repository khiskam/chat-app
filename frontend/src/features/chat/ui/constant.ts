import type { ComponentType } from "react";

import type { MessageType } from "../model/type";
import { ClientMessage } from "./client-message";
import { ManagerMessage } from "./manager-message";
import { SystemMessage } from "./system-message";
import type { MessageProps } from "./type";

export const MESSAGE_TYPE_MAP: Record<MessageType, ComponentType<MessageProps>> = {
  client: ClientMessage,
  manager: ManagerMessage,
  system: SystemMessage,
};
