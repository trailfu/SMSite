import React from "react";
import { cn } from "@/lib/utils";

export const Badge = React.forwardRef(function Badge({ className, ...props }, ref) {
  return <span ref={ref} className={cn("inline-flex items-center rounded-md text-xs font-medium", className)} {...props} />;
});
