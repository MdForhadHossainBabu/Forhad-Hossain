import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";

const Contact = () => {
 return (
   <>
     <Helmet>
       <title>Forhad Hossain | Contact me</title>
     </Helmet>

     <ScrollArea className="pt-4 h-auto md:pt-6 transition-all duration-300 w-full">
       <Tabs defaultValue="contact" className="w-full lg:flex">
         <TabsList className="lg:w-3/12">
           <TabsTrigger
             value="contact"
             className="flex-1 w-full"
           >
             Contact
           </TabsTrigger>
           <TabsTrigger value="hire" className="flex-1 w-full">
             Why Hire Me!
           </TabsTrigger>
         </TabsList>
         <TabsContent
           value="contact"
           className="lg:w-1/2  mx-auto"
         >
           <label className="md:w-3/4 mx-auto py-1 flex text-slate-900/90 font-mono mt-2">
             Name
           </label>
           <Input
             className="lg:w-3/4  mx-auto"
             type="text"
             placeholder="Type Your Name here*"
           />
           <label
             className="
      lg:w-3/4 mx-auto
            py-1 flex text-slate-900/90 font-mono mt-2"
           >
             Email
           </label>
           <Input className="lg:w-3/4 mx-auto" placeholder="Type Your Email*" />
           <label className="lg:w-3/4 mx-auto py-1 flex text-slate-900/90 font-mono mt-2">
             Phone Number
           </label>
           <Input
             className="lg:w-3/4 mx-auto"
             placeholder="Type Your Phone Number*"
           />
           <label className="lg:w-3/4 mx-auto py-1 flex text-slate-900/90 font-mono mt-2">
             Select Type
           </label>
           <Select>
             <SelectTrigger id="framework" className="lg:w-3/4 mx-auto">
               <SelectValue placeholder="Choice Your Item*" />
             </SelectTrigger>
             <SelectContent
               position="popper"
               className="lg:3/4 mx-auto bg-gray-300"
             >
               <SelectItem
                 value="Figma to react.js with tailwind css
"
               >
                 Figma to react.js with tailwind css
               </SelectItem>
               <SelectItem
                 value="Figma to react.js tailwind css with material ui
"
               >
                 Figma to react.js tailwind css with material ui
               </SelectItem>
               <SelectItem value="Figma to react.js tailwind css with meraki UI & daisy UI">
                 Figma to react.js tailwind css with meraki UI & daisy UI
               </SelectItem>
             </SelectContent>
           </Select>
           <label className="lg:w-3/4 mx-auto py-1 flex text-slate-900/90 font-mono mt-2">
             Send Me Your Opinion*
           </label>
           <Textarea className="lg:w-3/4 mx-auto" placeholder="Message Me!" />
           <div className="lg:w-3/4 mx-auto my-4">
             <Button className="w-full">Message Me</Button>
           </div>
         </TabsContent>
         <TabsContent value="hire" className="lg:w-1/2  mx-auto px-1">
           <h1 className="font-bold md:text-2xl text-xl bg-gradient-to-r from-rose-500  to-cyan-500 inline-block text-transparent bg-clip-text uppercase mt-1">
             Why hire me!
           </h1>
         </TabsContent>
       </Tabs>
     </ScrollArea>
   </>
 );
};

export default Contact;