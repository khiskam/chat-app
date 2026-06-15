import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export const MessagesList = () => {
  const parentRef = useRef<HTMLElement>(null);

  const virtualizer = useVirtualizer({
    count: 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72,
    anchorTo: "end",
    followOnAppend: true,
    scrollEndThreshold: 80,
    overscan: 6,
    directDomUpdates: true,
  });

  return (
    <section className="w-1/2 mx-auto h-screen overflow-scroll p-3 border-x" ref={ parentRef }>
      <div
        ref={ virtualizer.containerRef }
        style={ {
          position: "relative",
          width: "100%",
        } }
      >
        { virtualizer.getVirtualItems().map((item) => (
          <div
            key={ item.key }
            ref={ virtualizer.measureElement }
            data-index={ item.index }
            style={ {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            } }
          >
            { /* <Message message={ } /> */ }
          </div>
        )) }
      </div>
    </section>
  );
};
