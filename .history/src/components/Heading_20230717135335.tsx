import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  className?: string;
  children: ReactNode;
}

  export function Heading({ className, children }: HeadingProps) {
    return (
      <h2 className={clsx("text-xl font-bold text-white", className)}>
        {children}
      </h2>
    )
  }