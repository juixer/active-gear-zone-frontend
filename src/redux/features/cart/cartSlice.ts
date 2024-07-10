import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartItem = {
  _id: string;
  quantity: number;
  stockQuantity?: number;
  price?: number;
  name?: string;
  image?: string;
  totalPrice?: number;
};

type TInitialState = {
  cart: TCartItem[];
  cartNumber: number;
};

const initialState: TInitialState = {
  cart: [],
  cartNumber: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ _id: string, price : number}>) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
        item.totalPrice = (item.totalPrice as number) + action.payload.price;
      } 
    },
    decrement: (state, action: PayloadAction<{ _id: string, price : number }>) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          item.totalPrice = (item.totalPrice as number) - action.payload.price;
        } 
      }
    },
    changeWithValue: (
      state,
      action: PayloadAction<{ _id: string; quantity: number, price : number}>
    ) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = (item.totalPrice as number) + (action.payload.price * action.payload.quantity)
      }
    },
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.totalPrice =
          (item.price as number) +
          (action.payload.price as number) * action.payload.quantity;
        item.price = action.payload.price;
        item.name = action.payload.name;
        item.image = action.payload.image;
        item.quantity += action.payload.quantity;
        item.stockQuantity = action.payload.stockQuantity;
      } else {
        state.cart.push({
          _id: action.payload._id,
          quantity: action.payload.quantity,
          totalPrice:
            (action.payload.price as number) * action.payload.quantity,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          stockQuantity: action.payload.stockQuantity,
        });
      }
    },
    incrementCartNumber: (state) => {
      state.cartNumber++;
    },
    decrementCartNumber: (state) => {
      if (state.cartNumber > 1) {
        state.cartNumber--;
      }
    },
    changeCartNumberByValue: (state, action) => {
      state.cartNumber = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  changeWithValue,
  addToCart,
  incrementCartNumber,
  decrementCartNumber,
  changeCartNumberByValue,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentQuantity = (state: RootState, productId: string) => {
  const item = state.cart.cart.find((item) => item._id === productId);
  return item ? item.quantity : 0;
};

export const SelectCartItems = (state: RootState) => state.cart.cart;

export const selectCartNumber = (state: RootState) => state.cart.cartNumber;
