import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import certificate from "../../assets/certificate.png"

const Resume = () => {
 return (
   <div className="flex flex-col justify-between h-full">
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
               <h1 className="font-medium">Name</h1>
               <h1 className="text-sm font-medium bg-gradient-to-r from-rose-700 to-cyan-700 inline-block text-transparent bg-clip-text">
                 Md Forhad Hossain Babu
               </h1>
             </div>
             <div className="flex items-center border justify-between py-4 px-3">
               <h1 className="font-medium">Age</h1>
               <h1 className="text-sm font-medium">17</h1>
             </div>
             <div className="flex items-center border justify-between py-4 px-3">
               <h1 className="font-medium">Email</h1>
               <h1 className="text-sm font-medium">
                 developerforhad2@gmail.com
               </h1>
             </div>
             <div className="flex items-center border justify-between py-4 px-3">
               <h1 className="font-medium">Linkedin</h1>
               <h1 className="text-sm font-medium">
                 <a
                   className="text-blue-500 hover:underline visited:bg-yellow-400 transition-all duration-300" target="_blank"
                   href="https://www.linkedin.com/in/mdforhadhossainbabu/"
                 >
                   Linkedin
                 </a>
               </h1>
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
     <div className="pb-12">    
     <Dialog>
       <DialogTrigger asChild>
         <Button variant="secondary" className="font-bold uppercase hover:border hover:border-blue-400" >Certificate Here</Button>
       </DialogTrigger>
       <DialogContent className="sm:max-w-[425px]">
         <DialogHeader>
           <DialogTitle>My Achievement</DialogTitle>
           <DialogDescription>
             It's long time to my achievement.
           </DialogDescription>
         </DialogHeader>
         <div className="grid gap-4 py-4">
           <img src={certificate} alt="" />
         </div>
         <DialogFooter>
           <Button>
             <a href={certificate} download={certificate}>
               Download Now
             </a>
           </Button>
         </DialogFooter>
       </DialogContent>
     </Dialog>
</div>
   </div>
 );
};

export default Resume;