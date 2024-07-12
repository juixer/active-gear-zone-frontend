import Container from "@/components/layout/Container";
import { checkOut, SelectCartItems } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
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
import Row from "./Row";
import HelmetElement from "@/utils/Helmet/HelmetElement";

const Cart = () => {
  //  CART ITEMS
  const cart = useAppSelector(SelectCartItems);
  // DISPATCH FROM REDUX
  const dispatch = useAppDispatch();

  // HANDLING CHECKOUT
  const handleCheckOut = () => {
    // CALCULATE SUBTOTAL AND ADD 15% TAX
    const subTotal = (
      cart.reduce((acc, item) => (item.totalPrice as number) + acc, 0) *
      (1 + 15 / 100)
    ).toFixed(2);

    // DISPATCH ACTION IT WILL SET SUBTOTAL IN STORE
    dispatch(checkOut(Number(subTotal)));
  };

  return (
    <Container>
      <HelmetElement text="Cart" />
      <div className="py-5 flex flex-col-reverse lg:flex-row justify-between gap-5 ">
        <div className="lg:w-3/4">
          {!cart.length ? (
            <div className="flex justify-center items-center flex-col">
              <img src="https://i.ibb.co/9qzbtQF/11329060.png" />
              <h1 className="text-3xl font-semibold text-center">
                Your cart is empty!
              </h1>
            </div>
          ) : (
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
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.map((item) => (
                  <Row key={item._id} item={item} />
                ))}
              </TableBody>
            </Table>
          )}
        </div>
        <div className="lg:w-1/4 space-y-5">
          <Headline text="Cart Totals" />

          <div className="flex justify-between text-xl">
            <p>Subtotal</p>

            <p className="font-semibold">
              ${cart.reduce((acc, item) => (item.totalPrice as number) + acc, 0)}
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
             ${(
                cart.reduce(
                  (acc, item) => (item.totalPrice as number) + acc,
                  0
                ) *
                (1 + 15 / 100)
              ).toFixed(2)}
            </p>
          </div>

          <div>
            {cart.length ? (
              <NavLink to={"/checkout"}>
                <Button
                  onClick={handleCheckOut}
                  disabled={!cart.length}
                  className="w-full bg-baseColor text-black hover:bg-lime-600"
                >
                  Checkout
                </Button>
              </NavLink>
            ) : (
              <Button
                disabled={!cart.length}
                className="w-full bg-baseColor text-black hover:bg-lime-600"
              >
                Checkout
              </Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Cart;
