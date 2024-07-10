import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../../components/ui/button";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export type TProduct = {
  _id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  stockQuantity: number;
  rating?: number;
  price: number;
  image: string;
  isAvailable?: boolean;
};

const ProductCard = ({ product }: { product: TProduct }) => {
  const {
    _id,
    brand,
    category,
    image,
    name,
    price,
    stockQuantity,
    rating,
    isAvailable,
  } = product;
  return (
    <Card className={`flex flex-col justify-center items-center shadow-xl`}>
      <CardHeader>
        <CardTitle className="overflow-hidden rounded-md flex flex-col justify-center items-center relative">
          <img
            src={image}
            className="w-72 h-72 rounded-md hover:scale-110  duration-300 object-cover"
          />
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaRegStar className="text-orange-500" />}
            fullSymbol={<FaStar className="text-orange-500" />}
            placeholderSymbol={<FaStar className="text-orange-500" />}
            className="absolute bottom-0 text-base"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 w-full">
        <p className="font-semibold text-xl">{name}</p>

        <p>
          Category: <span className="font-medium">{category}</span>
        </p>
        <p>
          Brand: <span className="font-medium">{brand}</span>
        </p>
        <p>
          Price: <span className="font-medium">${price}</span>
        </p>

        {isAvailable ? (
          <p>
            In-Stock: <span className="font-medium">{stockQuantity}</span>
          </p>
        ) : (
          <p className="text-red-500 font-medium">Out of Stock</p>
        )}

        <NavLink to={`/product/${_id}`}>
          <Button className="bg-baseColor text-black hover:bg-lime-600 duration-300 w-full">
            View Details
          </Button>
        </NavLink>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
