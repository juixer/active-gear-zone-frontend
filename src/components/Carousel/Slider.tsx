import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

const Slider = () => {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent>
        {/* pic 1 */}
        <CarouselItem>
          <div className="p-1 relative">
            <div className="md:top-[35%] top-[10%] left-[10%] absolute">
              <h1 className="md:text-5xl text-white  font-semibold max-w-48 md:max-w-96 mb-3">
                Unleash your Potential with Elite Gear
              </h1>
              <NavLink to={"/products"}>
                <Button className="bg-baseColor hover:bg-lime-600 duration-300 text-black">
                  Discovery Now
                </Button>
              </NavLink>
            </div>
            <img
              src="https://i.ibb.co/XDm9ZGT/pic-1-1.png"
              className="rounded-md"
            />
          </div>
        </CarouselItem>
        {/* pic 2 */}
        <CarouselItem>
          <div className="p-1 relative">
            <div className="md:top-[35%] top-[10%] left-[10%] absolute">
              <h1 className="md:text-5xl text-white  font-semibold max-w-48 md:max-w-96 mb-3">
                Unleash your Potential with Elite Gear
              </h1>
              <NavLink to={"/products"}>
                <Button className="bg-baseColor hover:bg-lime-600 duration-300 text-black">
                  Discovery Now
                </Button>
              </NavLink>
            </div>
            <img
              src="https://i.ibb.co/FsFRb6Y/pic-2-1.png"
              className="rounded-md"
            />
          </div>
        </CarouselItem>
        {/* pic 3 */}
        <CarouselItem>
          <div className="p-1 relative">
            <div className="md:top-[35%] top-[10%] left-[10%] absolute">
              <h1 className="md:text-5xl text-white  font-semibold max-w-48 md:max-w-96 mb-3">
                Unleash your Potential with Elite Gear
              </h1>
              <NavLink to={"/products"}>
                <Button className="bg-baseColor hover:bg-lime-600 duration-300 text-black">
                  Discovery Now
                </Button>
              </NavLink>
            </div>
            <img
              src="https://i.ibb.co/XDynBQr/pic-5.png"
              className="rounded-md"
            />
          </div>
        </CarouselItem>
        {/* pic 4 */}
        <CarouselItem>
          <div className="p-1 relative">
            <div className="md:top-[35%] top-[10%] left-[10%] absolute">
              <h1 className="md:text-5xl text-white  font-semibold max-w-48 md:max-w-96 mb-3">
                Unleash your Potential with Elite Gear
              </h1>
              <NavLink to={"/products"}>
                <Button className="bg-baseColor hover:bg-lime-600 duration-300 text-black">
                  Discovery Now
                </Button>
              </NavLink>
            </div>
            <img
              src="https://i.ibb.co/JC2F1bZ/pic-4-1.png"
              className="rounded-md"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default Slider;
