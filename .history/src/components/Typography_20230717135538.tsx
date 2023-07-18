import { ReactNode } from "react";
import clsx from "clsx";

type TypographyProps = {
  className: string;
  children: ReactNode;
}

  export function Typography({ className, children }: TypographyProps) {
    return (
      <span className={clsx("text-base text-black", className)}>
        {children}
      </span>
    )
  }