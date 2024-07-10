import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  decrement,
  increment,
  selectCurrentQuantity,
  TCartItem,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const Row = ({ item }: { item: TCartItem }) => {
  const dispatch = useAppDispatch();
  const productId = item._id;
  const totalQuantity = useAppSelector((state: RootState) =>
    selectCurrentQuantity(state, productId)
  );

  return (
    <TableRow key={item._id}>
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
            onClick={() => dispatch(decrement({ _id: productId, price: (item.price as number) }))}
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
            onClick={() => dispatch(increment({ _id: productId, price: (item.price as number) }))}
            className="bg-white text-black border hover:bg-zinc-200"
          >
            +
          </Button>
        </div>
      </TableCell>
      <TableCell className="text-right">${item.totalPrice}</TableCell>
    </TableRow>
  );
};
export default Row;
