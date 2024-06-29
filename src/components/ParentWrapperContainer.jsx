import React from "react";

export default function ParentWrapperContainer({ children, styles }) {
  return (
    <div className={`h-[100vh] flex  w-full ${styles} `}>
      <div className="pl-10 md:basis-1/2 md:pl-0">{children}</div>
    </div>
  );
}
