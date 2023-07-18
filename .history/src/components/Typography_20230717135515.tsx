import { ReactNode } from "react";
import clsx from "clsx";

type TypographyProps = {
  className: string;
  children: ReactNode;
}

  export function Typography({ className, children }: TypographyProps) {
    return (
      <button className={clsx("text-base text-black", className)} onClick={onClick}>
        {children}
      </button>
    )
  }