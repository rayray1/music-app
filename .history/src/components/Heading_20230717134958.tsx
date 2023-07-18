import { ReactNode } from "react";
import clsx from "clsx"

type ButtonProps = {
  className: string;
  children: ReactNode;
  onClick: ReactNode;
}

  export function Heading({ className, children, onClick }: HeadingProps) {
    return (
      <button className={clsx("text-x", className)} onClick={onClick}>
        {children}
      </button>
    )
  }