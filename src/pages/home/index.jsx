import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet-async';
import { ScrollArea } from '@/components/ui/scroll-area';
import banner from "../../assets/forhadh-removebg-preview.png"

const Home = () => {
  return (
    <ScrollArea className=" flex flex-col items-center justify-center md:my-20  h-auto">
      <Helmet>
        <title>Forhad Hossain | React Js Front-end Developer</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300">
        <div className="flex-1 md:hidden flex lg:pt-8">
          <div>
            <img
              className=" items-center flex flex-col justify-center mx-auto rounded-full"
              src={banner}
              alt="image"
            />
          </div>
        </div>
        <div className="flex-1 break-words lg:py-12 py-6 lg:pt-24">
          <h1 className="text-4xl  lg:py-4 font-bold bg-gradient-to-r from-rose-500 to-cyan-500 text-transparent inline-block bg-clip-text">
            Hey <span className="text-5xl text-orange-100">👋</span> I'm
          </h1>
          <br />
          <h1 className="xl:text-[2.8rem] lg:text-4xl text-3xl font-bold lg:tracking-tighter xl:tracking-wider bg-gradient-to-r from-rose-500 via-purple-700 to-blue-500 text-transparent inline-block bg-clip-text uppercase items-center">
            <span className="flex items-center gap-3">
              Forhad Hossain <span className="hidden md:flex"> Babu</span>
            </span>
          </h1>
          <div className=" py-2 flex items-center lg:py-6">
            <div className="border-b-4 tracking-tighter shadow-transparent border-b-purple-500 text-xl md:text-3xl font-medium md:font-bold bg-gradient-to-r from-blue-500 via-purple-700 to-rose-500 text-transparent inline-block bg-clip-text lg:tracking-widest">
              <Typewriter
                cursor={true}
                cursorStyle="|"
                cursorBlinking={true}
                cursorColor="red"
                typeSpeed={15}
                deleteSpeed={20}
                delaySpeed={1800}
                loop={true}
                words={[
                  'Professional Coder',
                  ' Front-end Developer',
                  'React Js Developer',
                  'Experiences a MongoDB Database',
                ]}
              />
            </div>
          </div>
          <p className="text-balance lg:w-3/4 font-medium text-slate-800/95">
            Hello! there I am Forhad Hossain. I am passionate about web
            development & also developing a dynamic web site web based-on
            friendly. If you want to be your dynamic web site then I can develop
            your website.
          </p>
          <h1 className="pt-4  bg-gradient-to-r from-rose-500 via-purple-700 to-blue-500 text-transparent inline-block bg-clip-text font-bold">
            Connect Me!
          </h1>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              className="p-[6px] shadow-2xl  transition-all duration-500 text-white bg-gradient-to-r from-rose-500 to-blue-500 cursor-pointer hover:scale-125 rounded-full"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="p-[6px] shadow-2xl  transition-all duration-500 text-white bg-gradient-to-r from-rose-500 to-blue-500 cursor-pointer hover:scale-125 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="p-[6px] shadow-2xl  transition-all duration-500 text-white bg-gradient-to-r from-rose-500 to-blue-500 cursor-pointer hover:scale-125 rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="p-[6px] shadow-2xl  transition-all duration-500 text-white bg-gradient-to-r from-rose-500 to-blue-500 cursor-pointer hover:scale-125 rounded-full"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="py-6">
            <Button className="font-bold">
              Download CV <FaDownload className="ml-2" />{' '}
            </Button>
          </div>
        </div>
        <div className="flex-1 hidden md:flex ">
          <div className='w-3/4 mx-auto'>
            <img
              className="w-full items-center flex flex-col justify-center mx-auto rounded-full"
              src={banner}
              alt="image"
            />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Home;
