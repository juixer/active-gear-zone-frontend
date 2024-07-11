import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";
import { categories } from "@/constatnt/constant";



const CategoryCarouSel = () => {

  
  return (
    <Carousel
      className="w-full py-5"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent className="-ml-1">
        {categories.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 relative">
              <div className="md:top-[35%] top-[10%] left-[10%] absolute">
                <h1 className="md:text-2xl text-white font-semibold max-w-48 md:max-w-96 mb-3">
                  {item.text}
                </h1>
                <NavLink to={`/products?category=${item.text}`}>
                  <Button className="bg-baseColor hover:bg-lime-600 duration-300 text-black">
                    Discovery Now
                  </Button>
                </NavLink>
              </div>
              <img src={item.img} className="rounded-md" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default CategoryCarouSel;
