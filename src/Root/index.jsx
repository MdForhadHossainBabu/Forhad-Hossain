import Navbar from "@/pages/navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
return (
   <div>
     <div>
       <Navbar />
     </div>
     <div className="h-[100vh] border-2 xl:px-32 lg:px-24  md:px-16 px-12 xl:pt-10 md:pt-8 pt-6">
       <Outlet />
     </div>
   </div>
 );
};

export default Root;