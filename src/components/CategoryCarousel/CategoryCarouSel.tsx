import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

export type TCategories = {
  img: string;
  text: string;
};

const CategoryCarouSel = () => {
  const categories: TCategories[] = [
    {
      img: "https://i.ibb.co/CM5PSpd/football.png",
      text: "Football",
    },
    {
      img: "https://i.ibb.co/LrjPhGh/basketball.png",
      text: "Basketball",
    },
    {
      img: "https://i.ibb.co/njsYyQf/tennis.png",
      text: "Tennis",
    },
    {
      img: "https://i.ibb.co/xYqnwsv/runnig-shoe.png",
      text: "Shoes",
    },
    {
      img: "https://i.ibb.co/0mTSw8N/swimming.png",
      text: "Swimming",
    },
    {
      img: "https://i.ibb.co/hDsNwCf/gym.png",
      text: "Gym",
    },
    {
      img: "https://i.ibb.co/zmQDWkZ/boxing.png",
      text: "Boxing",
    },
    {
      img: "https://i.ibb.co/RN0FVDR/cycling.png",
      text: "Cycling",
    },
    {
      img: "https://i.ibb.co/4Zd5YMK/golf.png",
      text: "Golf",
    },
    {
      img: "https://i.ibb.co/RvNv1x4/volleyball.png",
      text: "Volleyball",
    },
  ];
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
