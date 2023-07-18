import { ReactNode } from "react";
import clsx from "clsx"

type HeadingProps = {
  className: string;
  children: ReactNode;
  onClick: ReactNode;
}

  export function Heading({ className, children, onClick }: HeadingProps) {
    return (
      <button className={clsx("text-xl font-bold text-white", className)}>
        {children}
      </button>
    )
  }