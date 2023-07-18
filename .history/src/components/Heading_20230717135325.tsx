import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  className?: string;
  children: ReactNode;
}

  export function Heading({ className, children }: HeadingProps) {
    return (
      <button className={clsx("text-xl font-bold text-white", className)}>
        {children}
      </button>
    )
  }