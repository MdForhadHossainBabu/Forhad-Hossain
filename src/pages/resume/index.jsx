import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import certificate from "../../assets/certificate.png"
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <div>
    <ScrollArea className="mt-4 h-full relative flex items-center justify-center">
       <div className="flex-1">
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
           <TabsContent value="biography" className="md:py-16">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
               <div className="">
                 <div className="flex items-center justify-between py-4 px-3">
                   <h1 className="font-medium">Name</h1>
                   <h1 className="text-sm font-medium bg-gradient-to-r from-rose-700 to-cyan-700 inline-block text-transparent bg-clip-text">
                     Md Forhad Hossain Babu
                   </h1>
                 </div>
                 <hr />
                 <div className="flex items-center justify-between py-4 px-3">
                   <h1 className="font-medium">Age</h1>
                   <h1 className="text-sm font-medium">17</h1>
                 </div>
                 <hr />
                 <div className="flex items-center  justify-between py-4 px-3">
                   <h1 className="font-medium">Email</h1>
                   <h1 className="text-sm font-medium">
                     developerforhad2@gmail.com
                   </h1>
                 </div>
                 <hr />
                 <div className="flex items-center  justify-between py-4 px-3">
                   <h1 className="font-medium">Linkedin</h1>
                   <h1 className="text-sm font-medium">
                     <a
                       className="text-blue-500 hover:underline visited:bg-yellow-400 transition-all duration-300"
                       target="_blank"
                       href="https://www.linkedin.com/in/mdforhadhossainbabu/"
                     >
                       Linkedin
                     </a>
                   </h1>
                 </div>
                 <hr />
               </div>

               <div className="">
                 <div className="flex items-center  justify-between py-4 px-3">
                   <h1 className="font-medium">Country</h1>
                   <h1 className="text-sm font-medium ">Bangladesh</h1>
                 </div>
                 <hr />
                 <div className="flex items-center justify-between py-4 px-3">
                   <h1 className="font-medium">Address</h1>
                   <h1 className="text-sm font-medium">
                     Kurigram, Bangladesh{' '}
                   </h1>
                 </div>
                 <hr />
                 <div className="flex items-center justify-between py-4 px-3">
                   <h1 className="font-medium">Name</h1>
                   <h1 className="text-sm font-medium bg-gradient-to-r from-rose-700 to-cyan-700 inline-block text-transparent bg-clip-text">
                     +88 013 0216-1178
                   </h1>
                 </div>
                 <hr />

                 <div className="flex items-center justify-between py-4 px-3">
                   <h1 className="font-medium">Freelance</h1>
                   <h1 className="text-sm font-medium ">Available </h1>
                 </div>
                 <hr />
               </div>
             </div>
           </TabsContent>
           <TabsContent value="Skill">Hello world this Skill</TabsContent>
           <TabsContent value="Education" className="py-4">
             <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 ml-4 ">
               <div className="flex items-center gap-5">
                 <div className="border h-5/6 mt-6 my-2 relative">
                   <span className="flex w-5 h-5 absolute -top-4 -left-[10px]  rounded-full items-center justify-center border-4 border-rose-600"></span>
                   <Separator />
                 </div>
                 <div>
                   <h1
                     className="text-3xl text-slate-700
              font-bold"
                   >
                     SSC-Secondary School Certificate
                   </h1>
                   <h5 className="text-sm tracking-widest py-2">
                     Bagua Anantapur High School
                   </h5>
                   <Button className="w-32 from-rose-500 bg-gradient-to-r font-bold text-xl">
                     2018-23
                   </Button>
                   <p>
                     Successfully completed rigorous educational training.
                     Gained valuable skills, knowledge, and a strong academic
                     foundation. Participated actively in various learning
                     activities. Demonstrated consistent dedication to
                     excellence. Prepared for future educational and
                     professional endeavors.
                   </p>
                 </div>
               </div>
               <div className="flex items-center gap-5">
                 <div className="border h-5/6 mt-6 my-2 relative">
                   <span className="flex w-5 h-5 absolute -top-4 -left-[10px]  rounded-full items-center justify-center border-4 border-rose-600"></span>
                   <Separator />
                 </div>
                 <div>
                   {' '}
                   <h1
                     className="text-3xl text-slate-700
              font-bold"
                   >
                     SSC-Secondary School Certificate
                   </h1>
                   <h5 className="text-sm tracking-widest py-2">
                     Bagua Anantapur High School
                   </h5>
                   <Button className="w-32 from-rose-500 bg-gradient-to-r font-bold text-xl">
                     2018-23
                   </Button>
                   <p>
                     Successfully completed rigorous educational training.
                     Gained valuable skills, knowledge, and a strong academic
                     foundation. Participated actively in various learning
                     activities. Demonstrated consistent dedication to
                     excellence. Prepared for future educational and
                     professional endeavors.
                   </p>
                 </div>
               </div>
               <div className="flex lg:col-span-2 items-center gap-5">
                 <div className="border h-5/6 mt-6 my-2 relative">
                   <span className="flex w-5 h-5 absolute -top-4 -left-[10px]  rounded-full items-center justify-center border-4 border-rose-600"></span>
                   <Separator />
                 </div>
                 <div>
                   <h1
                     className="text-3xl text-slate-700
              font-bold"
                   >
                     SSC-Secondary School Certificate
                   </h1>
                   <h5 className="text-sm tracking-widest py-2">
                     Bagua Anantapur High School
                   </h5>
                   <Button className="w-32 from-rose-500 bg-gradient-to-r font-bold text-xl">
                     2018-23
                   </Button>
                   <p>
                     Successfully completed rigorous educational training.
                     Gained valuable skills, knowledge, and a strong academic
                     foundation. Participated actively in various learning
                     activities. Demonstrated consistent dedication to
                     excellence. Prepared for future educational and
                     professional endeavors.
                   </p>
                 </div>
               </div>{' '}
             </div>
           </TabsContent>
         </Tabs>
        </div>
        
       <div className="flex-1 sticky">
         <Dialog>
           <DialogTrigger asChild>
             <Button
               variant="secondary"
               className="font-bold uppercase hover:border hover:border-blue-400"
             >
               Certificate Here
             </Button>
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
   </ScrollArea>
    </div>
   
 );
};

export default Resume;