
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenuUnfold } from 'react-icons/ai';


const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
            : 'md:tracking-tight'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
            : 'md:tracking-tight'
        }
      >
        About
      </NavLink>
      <NavLink
        to="/service"
        className={({ isActive }) =>
          isActive
            ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
            : 'md:tracking-tight'
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive
            ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
            : 'md:tracking-tight'
        }
      >
        Resume
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive
            ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
            : 'md:tracking-tight'
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
            : 'md:tracking-tight'
        }
      >
        Contact
      </NavLink>
    </>
  );
  const navs = (
    <>
      <>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
              : 'md:tracking-tight hover:bg-slate-700 w-full rounded-full'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
              : 'md:tracking-tight hover:bg-slate-700 w-full rounded-full'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }) =>
            isActive
              ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
              : 'md:tracking-tight hover:bg-slate-700 w-full rounded-full'
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
              : 'md:tracking-tight hover:bg-slate-700 w-full rounded-full'
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
              : 'md:tracking-tight hover:bg-slate-700 w-full rounded-full'
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
              : 'md:tracking-tight hover:bg-slate-700 w-full rounded-full'
          }
        >
          Contact
        </NavLink>
      </>
    </>
  );
 return (
   <div>
     <Headroom
       className="fixed w-full z-20"
       style={{
         webkitTransition: 'all .5s ease-in-out',
         mozTransition: 'all .5s ease-in-out',
         oTransition: 'all .5s ease-in-out',
         transition: 'all .5s ease-in-out',
       }}
     >
       <div className="flex items-center justify-between">
         <div className="xl:px-32 lg:px-24 md:px-16 px-12">
           <h1 className="md:text-3xl text-xl md:font-bold font-bold bg-gradient-to-r from-rose-500  to-sky-500 inline-block text-transparent bg-clip-text uppercase">
             Forhad.
           </h1>
         </div>

         <div
           className="xl:px-32 lg:px-24 md:px-16 px-12 flex items-center gap-2
         "
         >
           <div className="md:flex items-center gap-5 mr-8 uppercase text-[14px] hidden ">
            {navLinks}
           </div>
           <Link
             to="/contact"
             className="bg-gradient-to-r from-rose-500 to-blue-600 text-transparent inline-block bg-clip-text shadow-2xl drop-shadow-2xl font-bold lg:text-lg uppercase"
           >
             Hire me!
           </Link>
           <div className="flex md:hidden">
             <Sheet className="md:hidden">
               <SheetTrigger>
                 <div className=" m-1">
                   <AiOutlineMenuUnfold className="text-3xl bg-gradient-to-r from-rose-500 to-cyan-500 text-white" />
                 </div>
               </SheetTrigger>
               <SheetContent>
                 <SheetHeader>
                   <SheetTitle className="font-bold text-3xl uppercase pb-12 pt-16 bg-gradient-to-r from-rose-500 to-cyan-500 inline-block text-transparent bg-clip-text tracking-widest">Forhad.</SheetTitle>
                   <div className="flex items-center flex-col space-y-6 w-full text-lg text-white">
                     {navs}
                   </div>
                 </SheetHeader>
               </SheetContent>
             </Sheet>
           </div>
         </div>
       </div>
     </Headroom>
   </div>
 );
};

export default Navbar;