import { ReactNode } from "react";
import clsx from "clsx"

type ButtonProps = {
  className: string;
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>

  export function Button({ className, children onClick }: ButtonProps) {
    return (
      <button className={clsx("bg-none border-0", className)} oncClick={onClick}>
        {children}

      </button>
    )
    
  }
}