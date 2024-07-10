import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

export type TCartItem = {
  _id: string;
  quantity: number;
  price?: number;
  name?: string;
  image?: string;
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
    increment: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ _id: action.payload._id, quantity: 1 });
      }
    },
    decrement: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i._id !== action.payload._id);
        }
      }
    },
    changeWithValue: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.cart.push({
          _id: action.payload._id,
          quantity: action.payload.quantity,
        });
      }
    },
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.price = action.payload.price;
        item.name = action.payload.name;
        item.image = action.payload.image;
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push({
          _id: action.payload._id,
          quantity: action.payload.quantity,
          price: action.payload.price,
          name: action.payload.name,
          image: action.payload.image,
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
  changeCartNumberByValue
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentQuantity = (state: RootState, productId: string) => {
  const item = state.cart.cart.find((item) => item._id === productId);
  return item ? item.quantity : 1;
};

export const selectCartNumber = (state: RootState) => state.cart.cartNumber;
