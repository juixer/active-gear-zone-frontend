import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

const Slider = () => {
  const items = [
    {
      img: "https://i.ibb.co/XDm9ZGT/pic-1-1.png",
      text: "Black Friday! up to 60% off",
    },
    {
      img: "https://i.ibb.co/FsFRb6Y/pic-2-1.png",
      text: "Unleash your Potential with Elite Gear",
    },
    {
      img: "https://i.ibb.co/XDynBQr/pic-5.png",
      text: "Black Friday! up to 60% off",
    },
    {
      img: "https://i.ibb.co/JC2F1bZ/pic-4-1.png",
      text: "Unleash your Potential with Elite Gear",
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
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 relative">
              <div className="md:top-[35%] top-[10%] left-[10%] absolute">
                <h1 className="md:text-5xl text-white font-semibold max-w-48 md:max-w-96 mb-3">
                  {item.text}
                </h1>
                <NavLink to={"/products"}>
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
export default Slider;
