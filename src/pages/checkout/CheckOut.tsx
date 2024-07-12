import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useConfirmOrderMutation } from "@/redux/features/cart/cartApi";
import {
  clearCart,
  SelectCartItems,
  selectSubTotal,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Headline from "@/utils/Headline/Headline";
import HelmetElement from "@/utils/Helmet/HelmetElement";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CheckOut = () => {
  // CHECKING ITS CASH ON DELIVERY
  const [cod, setCod] = useState(false);
  // CHECKING CREDIT CARD PAYMENT
  const [card, setCard] = useState(false);
  // SUBTOTAL OF THE CART FROM STORE
  const subTotal = useAppSelector(selectSubTotal);
  // CART ITEMS FROM THE STORE
  const cart = useAppSelector(SelectCartItems);
  // CONFIRMING ORDER MUTATION
  const [confirmOrder] = useConfirmOrderMutation();
  // DISPATCH FROM REDUX
  const dispatch = useAppDispatch();
  // NAVIGATE FROM REACT ROUTER
  const navigate = useNavigate();

  // CHANGING COD CHECKBOX
  const handleCodChange = () => {
    setCod(!cod);
  };
  // CHANGING CARD CHECKBOX
  const handleCardChange = () => {
    setCard(!card);
  };

  // REACT HOOK FORM 
  const { register, handleSubmit } = useForm();

  // HANDLING CHECKOUT
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Please wait...");
    try {
      // ORDER INFO OR ORDER MUTATION
      const orderInfo = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        paymentMethod: cod ? "Cash on delivery" : "Credit Card",
        subTotal,
        cart: cart.map((item) => ({
          _id: item._id,
          quantity: item.quantity,
        })),
      };

      // SENDING ORDER INFO TO CART API
      const result = await confirmOrder(orderInfo).unwrap();
      toast.success(`${result.message}`, {
        id: toastId,
        duration: 3000,
      });
      // CLEARING CART
      dispatch(clearCart());
      // NAVIGATING TO HOMEPAGE
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong", { id: toastId, duration: 3000 });
    }
  };

  return (
    <Container>
      <HelmetElement text="Checkout"/>
      <div className="py-5 space-y-5">
        <Headline text="checkout" />
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" space-y-5 w-full max-w-96"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg">
                Name<span className="text-red-500">*</span>
              </Label>
              <Input
                {...register("name")}
                placeholder="Enter your name"
                type="text"
                id="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">
                Email<span className="text-red-500">*</span>
              </Label>
              <Input
                {...register("email")}
                placeholder="Enter your email"
                type="text"
                id="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg">
                Phone<span className="text-red-500">*</span>
              </Label>
              <Input
                {...register("phone")}
                placeholder="Enter your phone number"
                type="text"
                id="phone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-lg">
                Address<span className="text-red-500">*</span>
              </Label>
              <Input
                {...register("address")}
                placeholder="Enter your address"
                type="text"
                id="address"
              />
            </div>

            <div className="space-y-5">
              <div className="flex items-center">
                <Checkbox
                  id="cod"
                  checked={cod}
                  onCheckedChange={handleCodChange}
                  disabled={card}
                />
                <Label htmlFor="cod" className="ml-3">
                  Cash on delivery
                </Label>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="card"
                  checked={card}
                  onCheckedChange={handleCardChange}
                  disabled={cod}
                />
                <Label htmlFor="card" className="ml-3">
                  Credit card
                </Label>
              </div>

              <div>
                {card && (
                  <div className="space-y-2 ">
                    <Label htmlFor="card_number" className="text-lg">
                      Card Number
                    </Label>
                    <Input
                      placeholder="Enter your Card number"
                      type="text"
                      id="card_number"
                    />
                  </div>
                )}
              </div>
            </div>

            <Button className="uppercase text-black bg-baseColor hover:bg-lime-600 w-full">
              Place order
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default CheckOut;
