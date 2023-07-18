import { ReactNode } from "react";
import clsx from "clsx";

type TypographyProps = {
  className: string;
  children: ReactNode;
}

  export function Button({ className, children, onClick }: ButtonProps) {
    return (
      <button className={clsx("bg-none border-0", className)} onClick={onClick}>
        {children}
      </button>
    )
  }