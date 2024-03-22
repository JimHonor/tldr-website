import React from "react";

export default function Container({ children }: React.PropsWithChildren) {
  return <div className="mx-auto">{children}</div>;
}
