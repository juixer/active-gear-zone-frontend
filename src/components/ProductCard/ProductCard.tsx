import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
const ProductCard = () => {
  return (
    <Card className="flex flex-col md:flex-row justify-center items-center">
      <CardHeader className="flex-2">
        <CardTitle className="overflow-hidden rounded-md flex flex-col justify-center items-center relative">
          <img
            src="https://i.ibb.co/VTbDDhP/the-ball-4388360-640.jpg"
            className="w-full h-72 rounded-md hover:scale-110  duration-300 object-cover"
          />
          <Rating
            readonly
            placeholderRating={4}
            emptySymbol={<FaRegStar className="text-orange-500" />}
            fullSymbol={<FaStar className="text-orange-500" />}
            placeholderSymbol={<FaStar className="text-orange-500" />}
            className="absolute bottom-0 text-base"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <p className="font-semibold text-center text-xl">Tennis Ball</p>

        <div className="flex justify-around items-center">
          <p>Category: Tennis</p>
          <p>Brand: Nike</p>
        </div>
        <div className="flex justify-around items-center">
          <p>In-Stock: 50</p>
          <p>Price: $50</p>
        </div>

        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut
          sint eius mollitia sed culpa libero deserunt consectetur quibusdam
          sapiente aspernatur , repudiandae?
        </CardDescription>
        <Button className="bg-baseColor text-black hover:bg-lime-600 duration-300 w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
