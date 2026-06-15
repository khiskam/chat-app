import { MessagesList } from "./features/chat/ui/messages-list";
import { QueryProvider } from "./shared/provider/query-provider";

export const App = () => {
  return (
    <QueryProvider>
      <MessagesList />
    </QueryProvider>
  );
};
