
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/Route/index.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <div className='lg:max-w-screen-2xl md:max-w-screen-xl xl:max-w-[2250px] max-w-screen-lg sm:max-w-screen-md mx-auto transition-all duration-500 bg-gradient-to-br from-rose-300 to-sky-300 h-screen'>
    <HelmetProvider>
    <RouterProvider router={router}/>
    </HelmetProvider>
  </div>
  </>
)
