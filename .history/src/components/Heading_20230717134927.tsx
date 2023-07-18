import { ReactNode } from "react";
import clsx from "clsx"

type ButtonProps = {
  className: string;
  children: ReactNode;
  onClick: ReactNode;
}

  export function Button({ className, children, onClick }: ButtonProps) {
    return (
      <button className={clsx("bg-none border-0", className)} onClick={onClick}>
        {children}
      </button>
    )
  }