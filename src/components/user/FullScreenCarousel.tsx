
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import carouselImage1 from "../../assets/imageye/1_WebBanner_1920x1080_d93d134a-2ab3-4c0f-8402-08fb2aea5d62_1400x.jpg";
import carouselImage2 from "../../assets/imageye/2_WebBanner_1920x1080_3e763482-0a10-4e6e-8148-ea8bf2ca66c4_1400x.jpg";
import carouselImage3 from "../../assets/imageye/2_WebBanner_1920x1080_ad56c6d3-e432-45fc-82d3-3b8ac4960b6d_1400x.jpg";
import carouselImage4 from "../../assets/imageye/4_WebBanner_1920x1080_84536a8f-fc48-4832-95ef-96136e3b4170_1400x.jpg";

const slides = [
  {
    id: 1,
    image: carouselImage1,
    title: "Summer Collection",
    description: "Discover our latest summer styles",
    cta: "Shop Now",
  },
  {
    id: 2,
    image: carouselImage2,
    title: "Autumn Essentials",
    description: "Get ready for the cooler months",
    cta: "Explore",
  },
  {
    id: 3,
    image: carouselImage3,
    title: "Luxe Accessories",
    description: "Elevate your look with our premium accessories",
    cta: "View Collection",
  },
  {
    id: 4,
    image: carouselImage4,
    title: "Winter Warmers",
    description: "Stay cozy with our latest collection",
    cta: "Discover More",
  },
];

export default function FullScreenCarousel() {
  return (
    <>
      <Carousel className="w-full h-screen " >
        <CarouselContent>
          {slides.map((slide: any) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-screen">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full max-h-screen object-cover"
                  />
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black transition-colors"
                  >
                    {slide.cta}
                  </Button>
                </div> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </>
  );
}
