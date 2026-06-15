import type { SystemMessageProps } from "./type";

export const SystemMessage = ({ message: { text } }: SystemMessageProps) => {
  return (
    <div className="grid justify-end pb-3">
      <p className="text-sm text-gray-500">
        { text }
      </p>
    </div>
  );
};
