import Container from "@/components/layout/Container";
import { useGetSingleProductQuery } from "@/redux/features/product/product.api";
import { useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaStar } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  changeWithValue,
  decrement,
  increment,
  selectCurrentQuantity,
} from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";

const SingleProduct = () => {
  const { productId } = useParams();

  const dispatch = useAppDispatch();
  const totalQuantity = useAppSelector((state) =>
    selectCurrentQuantity(state, productId)
  );


  const { data, isLoading } = useGetSingleProductQuery(productId);

  if (isLoading) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  const {
    _id,
    brand,
    category,
    description,
    image,
    name,
    price,
    stockQuantity,
    rating,
    isAvailable,
  } = data.data;

  const handleQuantityChange = (e) => {
    e.preventDefault();
    const quantity = Number(e.currentTarget.value);
    setQuantity(quantity);
    if (quantity > stockQuantity) {
      toast.error("Quantity exceeds stock", {
        duration: 3000,
      });
    }

    dispatch(changeWithValue({ _id, quantity }));
  };

  const handleDecrement = () => {
    dispatch(decrement({ _id }));
  };

  const handleIncrement = () => {
    dispatch(increment({ _id }));
  };

  return (
    <Container>
      <div className="py-5">
        <div className="flex justify-center flex-col md:flex-row items-center gap-5 md:gap-10">
          <PhotoProvider>
            <PhotoView src={image}>
              <img
                src={image}
                className="w-60 h-60 object-cover rounded-full"
              />
            </PhotoView>
          </PhotoProvider>
          <div className="space-y-5">
            <h1 className="text-4xl font-bold text-center md:text-left">
              {name}
            </h1>
            <div className="flex flex-wrap gap-5">
              <span className="bg-zinc-300 rounded-full px-4 py-2">
                Price: <span className="font-semibold">${price}</span>
              </span>
              <span className="bg-zinc-300 rounded-full px-4 py-2">
                In-Stock:
                <span className="font-semibold">
                  {isAvailable ? (
                    stockQuantity
                  ) : (
                    <span className="text-red-500"> Out of stock</span>
                  )}
                </span>
              </span>
              <span className="bg-zinc-300 rounded-full px-4 py-2">
                Brand: <span className="font-semibold">{brand}</span>
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleDecrement}
                className="bg-white text-black border hover:bg-zinc-200"
              >
                -
              </Button>
              <Input
                type="number"
                min={1}
                max={stockQuantity}
                value={totalQuantity}
                onChange={handleQuantityChange}
                className="w-14 text-center"
              />
              <Button
                disabled={totalQuantity === stockQuantity}
                onClick={handleIncrement}
                className="bg-white text-black border hover:bg-zinc-200"
              >
                +
              </Button>
              <Button
                disabled={!isAvailable || totalQuantity === stockQuantity}
                className="bg-baseColor  text-black hover:bg-lime-600"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <div className="py-5">
          <Table className="max-w-screen-md mx-auto">
            <TableCaption>Specification of {name}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Attribute</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* row */}
              <TableRow>
                <TableCell className="font-semibold">Name:</TableCell>
                <TableCell>{name}</TableCell>
              </TableRow>
              {/* row */}
              <TableRow>
                <TableCell className="font-semibold">Price:</TableCell>
                <TableCell>${price}</TableCell>
              </TableRow>
              {/* row */}
              <TableRow>
                <TableCell className="font-semibold">Category:</TableCell>
                <TableCell>{category}</TableCell>
              </TableRow>
              {/* row */}
              <TableRow>
                <TableCell className="font-semibold">Brand:</TableCell>
                <TableCell>{brand}</TableCell>
              </TableRow>
              {/* row */}
              <TableRow>
                <TableCell className="font-semibold">Stock:</TableCell>
                <TableCell>
                  {" "}
                  {isAvailable ? (
                    stockQuantity
                  ) : (
                    <span className="text-red-500"> Out of stock</span>
                  )}
                </TableCell>
              </TableRow>
              {/* row */}
              <TableRow>
                <TableCell className="font-semibold">Rating:</TableCell>
                <TableCell className="flex items-center gap-1">
                  {rating} <FaStar className="text-orange-400" />
                </TableCell>
              </TableRow>
              {/* row */}
              <TableRow>
                <TableCell className="font-semibold">Description:</TableCell>
                <TableCell className="max-w-80 text-justify w-full">
                  {description}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </Container>
  );
};
export default SingleProduct;
