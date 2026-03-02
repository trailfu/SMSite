import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(function Button(
  { className, type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/40 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
