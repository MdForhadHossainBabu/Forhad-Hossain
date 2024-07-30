import About from "@/pages/about"
import Contact from "@/pages/contact"
import Home from "@/pages/home"
import Portfolio from "@/pages/portfolio"
import Resume from "@/pages/resume"
import Services from "@/pages/services"
import Root from "@/Root"
import { createBrowserRouter, Navigate } from "react-router-dom"

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Root />,
  children: [
   {
    index: true,
    element: <Home />,
   },
   {
    path: '/about',
    element:<About/>
   },
   {
    path: '/resume',
    element: <Resume/>
   },
   {
    path: '/portfolio',
    element:<Portfolio/>
   },
   {
    path: '/contact',
    element: <Contact/>
   },
   {
    path: '/service',
    element: <Services/>
   }
  ]
 },
 {
  path: '*',
  element: <Navigate to="/"/>
 }
])
