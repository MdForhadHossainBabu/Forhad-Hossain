import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Helmet } from "react-helmet-async";

const About = () => {
 return (
   <div>
     <Helmet>
       <title>Forhad Hossain | About me</title>
     </Helmet>
     <ScrollArea className="h-[90vh] my-4 lg:py-6">
       <Accordion type="single" collapsible className="lg:w-1/2 mx-auto">
         <AccordionItem value="item-1">
           <AccordionTrigger>
             <h1 className="text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
               {' '}
               About,
             </h1>{' '}
           </AccordionTrigger>
           <AccordionContent>
             <h1 className="lg:text-xl text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
               {' '}
               I develop Solutions that Empower.
             </h1>
             <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
               I'm Forhad Hossain, a skilled MERN stack developer. With MongoDB,
               Express.js, React, and Node.js, I've crafted dynamic web
               applications that captivate. From sleek interfaces to powerful
               backend systems, I deliver unique online experiences. Let's turn
               your ideas into exceptional digital realities.
             </p>{' '}
           </AccordionContent>
         </AccordionItem>
       </Accordion>

       <h1 className="lg:text-xl mt-5 text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 uppercase inline-block text-transparent bg-clip-text font-medium ">
         {' '}
         Hello Everyone,
       </h1>
       <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
         {' '}
         My name is Forhad Hossain. Currently, I am pursuing my studies at
         Kurigram Collectorate College in the Humanities branch. I have
         proficiency in several technologies, including HTML, CSS, JavaScript,
         React.js, Firebase, and MongoDB database technology. I am passionate
         about web development and have been working on various projects using
         these technologies.
       </p>

       <h1 className="lg:text-xl uppercase text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
         What I Do:
       </h1>
       <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
         Alongside my studies, I am a web developer, and I work with various web
         technologies. I am proficient in HTML, CSS, JavaScript, React.js,
         Firebase, and MongoDB. Currently, I am in the process of learning new
         programming languages. I am passionate about programming.
       </p>
       <h1 className="lg:text-xl uppercase text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
         Why I Do It:
       </h1>
       <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
         I want to solve various societal problems through technology and make
         people's lives easier. My goal is to expand my knowledge by learning
         new technologies and programming languages and to develop advanced web
         applications.
       </p>
       <h1 className="lg:text-xl text-lg uppercase tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
         How I Add Value:
       </h1>
       <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
         I add value by leveraging my web development skills and continuously
         learning new programming languages to create efficient and innovative
         web applications. My approach involves:
       </p>
       <h1 className="lg:text-xl uppercase text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
         Problem Solving:
       </h1>
       <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
         Identifying and addressing societal issues through technological
         solutions.
       </p>
       <h1 className="lg:text-xl uppercase text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
         Efficiency:
       </h1>
       <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
         Developing user-friendly, efficient, and scalable web applications.
       </p>
       <h1 className="lg:text-xl uppercase text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
         Continuous Learning:
       </h1>
       <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
         Staying updated with the latest technologies and programming languages
         to enhance my skill set.
       </p>
       <h1 className="lg:text-xl uppercase text-lg tracking-tight lg:tracking-widest bg-gradient-to-r from-red-500 to-blue-700 inline-block text-transparent bg-clip-text font-medium ">
         Passion for Programming:
       </h1>
       <p className="font-mono text-sm lg:tracking-widest tracking-tight py-2 text-black">
         Bringing enthusiasm and dedication to every project I undertake,
         ensuring optimal outcomes.
       </p>
     </ScrollArea>
   </div>
 );
};

export default About;