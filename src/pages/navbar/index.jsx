
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
           <h1 className="md:text-3xl text-xl md:font-bold font-medium bg-gradient-to-r from-rose-500  to-sky-500 inline-block text-transparent bg-clip-text uppercase">
             Forhad.
           </h1>
         </div>

         <div
           className="xl:px-32 lg:px-24 md:px-16 px-12 flex items-center gap-2
         "
         >
           <div className="md:flex items-center gap-5 mr-8 uppercase text-[14px] hidden ">
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
             <NavLink to='/contact'
               className={({ isActive }) =>
                 isActive
                   ? 'font-medium bg-gradient-to-r from-rose-500  to-blue-600 text-transparent inline-block bg-clip-text md:tracking-widest'
                   : 'md:tracking-tight'
               }
             >
               Contact
             </NavLink>
           </div>
           <Link to='/contact'
             className="bg-gradient-to-r from-rose-500 to-blue-600 text-transparent inline-block bg-clip-text shadow-2xl drop-shadow-2xl font-bold lg:text-lg uppercase"
           >
             Hire me!
           </Link>
         </div>
       </div>
     </Headroom>
   </div>
 );
};

export default Navbar;