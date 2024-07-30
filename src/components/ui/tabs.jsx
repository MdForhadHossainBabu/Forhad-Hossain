import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    defaultValue='contact'
    className={cn(
      " rounded-md p-1 text-muted-foreground",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    defaultValue="contact"
    className={cn(
      'flex flex-col items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 my-2 text-[12px] tracking-widest font-medium ring-offset-background transition-all focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:font-medium uppercase data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-blue-500 data-[state=active]:text-white bg-slate-100 duration-500 hover:bg-slate-700 hover:text-white hover:duration-300',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ml- ring-offset-background focus-visible:outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
