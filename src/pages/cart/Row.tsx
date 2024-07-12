import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  decrement,
  increment,
  removeProduct,
  selectCurrentQuantity,
  TCartItem,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { toast } from "sonner";

const Row = ({ item }: { item: TCartItem }) => {
  // DISPATCH FROM REDUX
  const dispatch = useAppDispatch();
  // PRODUCT ID FROM ITEM
  const productId = item._id;
  // TOTAL QUANTITY FROM STORE
  const totalQuantity = useAppSelector((state: RootState) =>
    selectCurrentQuantity(state, productId)
  );

  // HANDLING REMOVE CART ITEM
  const handleCartDelete = () => {
    dispatch(removeProduct({ _id: productId, quantity: totalQuantity }));
    toast.success("Product removed from cart", { duration: 3000 });
  };
  return (
    // ROW FOR CART table
    <TableRow key={item._id} className="font-medium">
      <TableCell>
        <img
          src={item.image}
          className="md:w-20 md:h-20 w-13 h-13 object-cover rounded-md"
        />
      </TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>${item.price}</TableCell>
      <TableCell>{item.stockQuantity}</TableCell>
      <TableCell>
        <div className="flex ">
          <Button
            onClick={() =>
              dispatch(
                decrement({ _id: productId, price: item.price as number })
              )
            }
            className="bg-white text-black border hover:bg-zinc-200"
          >
            -
          </Button>
          <Input
            type="number"
            value={totalQuantity}
            readOnly
            min={1}
            className="w-14 text-center"
          />
          <Button
            disabled={
              item.quantity === item.stockQuantity ||
              item.quantity > (item.stockQuantity as number)
            }
            onClick={() =>
              dispatch(
                increment({ _id: productId, price: item.price as number })
              )
            }
            className="bg-white text-black border hover:bg-zinc-200"
          >
            +
          </Button>
        </div>
      </TableCell>
      <TableCell className="text-right">${item.totalPrice}</TableCell>
      <TableCell className="text-right">
        <Button
          onClick={handleCartDelete}
          className="bg-red-500 hover:bg-red-400 duration-300"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
export default Row;
