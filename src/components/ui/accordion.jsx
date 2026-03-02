import React from "react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext(null);
const AccordionItemContext = React.createContext(null);

export function Accordion({ collapsible = false, className, children, ...props }) {
  const [value, setValue] = React.useState(null);
  const toggle = (itemValue) => {
    setValue((current) => current === itemValue ? (collapsible ? null : current) : itemValue);
  };
  return <AccordionContext.Provider value={{ value, toggle }}><div className={cn(className)} {...props}>{children}</div></AccordionContext.Provider>;
}

export function AccordionItem({ value, className, children, ...props }) {
  return <AccordionItemContext.Provider value={value}><div className={cn(className)} {...props}>{children}</div></AccordionItemContext.Provider>;
}

export function AccordionTrigger({ className, children, ...props }) {
  const ctx = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  const open = ctx?.value === itemValue;
  return <button type="button" className={cn("w-full flex items-center justify-between gap-4", className)} onClick={() => ctx?.toggle(itemValue)} {...props}><span>{children}</span><span className="text-slate-400">{open ? "−" : "+"}</span></button>;
}

export function AccordionContent({ className, children, ...props }) {
  const ctx = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  if (ctx?.value !== itemValue) return null;
  return <div className={cn(className)} {...props}>{children}</div>;
}
