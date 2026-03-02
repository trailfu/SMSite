import React from "react";
import { cn } from "@/lib/utils";

const TabsContext = React.createContext(null);

export function Tabs({ defaultValue, value, onValueChange, className, children }) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value ?? internalValue;

  const setValue = (next) => {
    if (onValueChange) onValueChange(next);
    if (value === undefined) setInternalValue(next);
  };

  return <TabsContext.Provider value={{ value: currentValue, setValue }}><div className={cn(className)}>{children}</div></TabsContext.Provider>;
}

export function TabsList({ className, children, ...props }) {
  return <div className={cn(className)} {...props}>{children}</div>;
}

export function TabsTrigger({ className, value, children, ...props }) {
  const ctx = React.useContext(TabsContext);
  const active = ctx?.value === value;
  return <button type="button" data-state={active ? "active" : "inactive"} className={cn(className)} onClick={() => ctx?.setValue(value)} {...props}>{children}</button>;
}

export function TabsContent({ className, value, children, ...props }) {
  const ctx = React.useContext(TabsContext);
  if (ctx?.value !== value) return null;
  return <div className={cn(className)} {...props}>{children}</div>;
}
