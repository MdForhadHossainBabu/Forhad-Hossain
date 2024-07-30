import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Helmet } from "react-helmet-async";
import banner from "@/assets/certificate.png"
import fav from "@/assets/favicon.png"

const Portfolio = () => {
 return (
  <div className="pt-5 px-2">
   <Helmet>
    <title>
     Forhad Hossain | Portfolio Project
    </title>
    <link rel="shortcut icon" href={fav} type="image/x-icon" />
   </Helmet>
   <Carousel>
    <CarouselContent>
     <CarouselItem>
      <div className="h-[90vh] flex flex-col justify-center">
       <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 h-full">
        <div className="flex flex-col justify-center">
         <h1 className="text-9xl font-bold lg:px-24">01</h1>
        </div>
        <div className="border">
         <img className="w-full h-full" src={banner} alt="" />
        </div>
</div>
      </div>
     </CarouselItem>
     <CarouselItem>
      world
     </CarouselItem>
     <CarouselItem>world</CarouselItem>
     <CarouselItem>world</CarouselItem>
    </CarouselContent>
     <CarouselPrevious />
     <CarouselNext/>
</Carousel>
  </div>
 );
};

export default Portfolio;