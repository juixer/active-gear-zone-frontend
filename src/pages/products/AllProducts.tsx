import { TCategories } from "@/components/CategoryCarousel/CategoryCarouSel";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaStar } from "react-icons/fa6";
import ProductCard from "@/utils/ProductCard/ProductCard";

const AllProducts = () => {
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
      text: "Running Shoes",
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
  const sportsGoodsBrands = [
    { name: "Nike" },
    { name: "Adidas" },
    { name: "Puma" },
    { name: "Under Armour" },
    { name: "Reebok" },
    { name: "Asics" },
    { name: "New Balance" },
    { name: "Columbia Sportswear" },
    { name: "The North Face" },
    { name: "Patagonia" },
  ];
  return (
    <Container>
      <div className="py-5">
        {/* category */}
        <div className="flex flex-wrap gap-5 py-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="p-2 text-center border border-black rounded-xl cursor-pointer hover:bg-baseColor  duration-300"
            >
              <h3>{item.text}</h3>
            </div>
          ))}
        </div>

        <div className="py-5 flex justify-center items-center gap-3">
          <Input
            type="text"
            className="max-w-96 "
            placeholder="Search product by name"
          />
          <Button className="bg-baseColor hover:bg-lime-600 text-black">
            Search
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 py-5">
          <div className="lg:w-1/4  p-5">
            <form className="space-y-5">
              <div className="flex gap-5">
                <Input type="number" min={0} placeholder="$Min Price" />
                <Input type="number"min={1} placeholder="$Max Price" />
              </div>

              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {sportsGoodsBrands.map((brand, index) => (
                      <SelectItem key={index} value={brand.name}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <RadioGroup className="flex justify-center gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1" />
                    <Label htmlFor="1" className="flex items-center gap-1">
                      1 <FaStar className="text-orange-400" />
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2" />
                    <Label htmlFor="2" className="flex items-center gap-1">
                      2 <FaStar className="text-orange-400" />
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="3" />
                    <Label htmlFor="3" className="flex items-center gap-1">
                      3 <FaStar className="text-orange-400" />
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="4" />
                    <Label htmlFor="4" className="flex items-center gap-1">
                      4 <FaStar className="text-orange-400" />
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5" id="5" />
                    <Label htmlFor="5" className="flex items-center gap-1">
                      5 <FaStar className="text-orange-400" />
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button className="bg-baseColor hover:bg-lime-600 text-black w-full">
                Filter Products
              </Button>
            </form>
          </div>

          <div className="lg:w-3/4 p-5">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          
          
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AllProducts;
