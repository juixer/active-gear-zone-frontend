import Container from "@/components/layout/Container";
import {  SelectCartItems } from "@/redux/features/cart/cartSlice";
import {  useAppSelector } from "@/redux/hooks";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Headline from "@/utils/Headline/Headline";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import Row from "../checkout/Row";

const Cart = () => {
  const cart = useAppSelector(SelectCartItems);
  
  return (
    <Container>
      <div className="py-5 flex flex-col-reverse lg:flex-row justify-between gap-5 ">
        <div className="lg:w-3/4">
          <Table>
            <TableCaption>A list of your carts.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>In-Stock</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">SubTotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item) => (
                <Row key={item._id} item={item}/>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="lg:w-1/4 space-y-5">
          <Headline text="Cart Totals" />

          <div className="flex justify-between text-xl">
            <p>Subtotal</p>

            <p className="font-semibold">
              {cart.reduce((acc, item) => (item.totalPrice as number) + acc, 0)}
            </p>
          </div>
          <hr />
          <div className="flex justify-between text-xl">
            <p>Vat</p>

            <p className="font-semibold">15%</p>
          </div>
          <hr />
          <div className="flex justify-between text-xl">
            <p>Total</p>

            <p className="font-semibold">
              {(
                cart.reduce(
                  (acc, item) => (item.totalPrice as number) + acc,
                  0
                ) *
                (1 + 15 / 100)
              ).toFixed(2)}
            </p>
          </div>

          <div>
            <NavLink to={"/checkout"}>
              <Button className="w-full bg-baseColor text-black hover:bg-lime-600">
                Checkout
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Cart;
