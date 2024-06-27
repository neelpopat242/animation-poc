import React from "react";

export default function ParentWrapperContainer({ children, styles }) {
  return (
    <div className={`h-[100vh] flex  w-full ${styles} `}>
      <div className="basis-1/2">{children}</div>
    </div>
  );
}
