import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
 return (
   <div>
     <Tabs defaultValue="biography">
       <TabsList className="flex items-center justify-around gap-2">
         <TabsTrigger
           value="biography"
           className="flex-1 w-full py-3 data-[state=active]:font-bold transition-all duration-300"
         >
           Bio-graphy
         </TabsTrigger>
         <TabsTrigger
           value="Skill"
           className="flex-1 w-full py-3 data-[state=active]:font-bold transition-all duration-300"
         >
           Skill
         </TabsTrigger>
         <TabsTrigger
           value="Education"
           className="flex-1 w-full py-3 data-[state=active]:font-bold transition-all duration-300"
         >
           Education
         </TabsTrigger>
       </TabsList>
       <TabsContent value="biography">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
           <div className="border">
             <div className="flex items-center border justify-between py-4 px-3">
               <h1 className="text-lg font-medium">Name</h1>
               <h1 className="text-lg font-medium">Md Forhad Hossain Babu</h1>
             </div>
             <div className="flex items-center border justify-between py-4 px-3">
               <h1 className="text-lg font-medium">Age</h1>
               <h1 className="text-lg font-medium">17</h1>
             </div>
             <div className="flex items-center border justify-between py-4 px-3">
               <h1 className="text-lg font-medium">Age</h1>
               <h1 className="text-lg font-medium">17</h1>
             </div>
             <div className="flex items-center border justify-between py-4 px-3">
               <h1 className="text-lg font-medium">Name</h1>
               <h1 className="text-lg font-medium">Md Forhad Hossain Babu</h1>
             </div>
            
           </div>

           <div className="border">
             <div className="flex border items-center justify-between space-y-5 py-4">
               <div>fa</div>
               <div>h</div>
             </div>
             <div className="flex items-center justify-between space-y-5 py-4">
               <div>fa</div>
               <div>h</div>
             </div>
             <div className="flex items-center justify-between space-y-5 py-4">
               <div>fa</div>
               <div>h</div>
             </div>
           </div>
         </div>
       </TabsContent>
       <TabsContent value="Skill">Hello world this Skill</TabsContent>
       <TabsContent value="Education">Hello world this Education</TabsContent>
     </Tabs>
   </div>
 );
};

export default Resume;