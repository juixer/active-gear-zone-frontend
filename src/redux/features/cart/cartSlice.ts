import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartItem = {
  _id: string;
  quantity: number;
};

type TInitialState = {
  cart: TCartItem[];
};

const initialState: TInitialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ _id: action.payload._id, quantity: 1 });
      }
    },
    decrement: (state, action: PayloadAction<{ _id: string }>) => {
      const item = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter(
            (i) => i._id !== action.payload._id
          );
        }
      }
    },
    changeWithValue: (state, action: PayloadAction<{ _id: string; quantity: number }>) => {
      const item = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.cart.push({
          _id: action.payload._id,
          quantity: action.payload.quantity,
        });
      }
    },
  },
});

export const { increment, decrement, changeWithValue } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentQuantity = (state: RootState, productId: string) => {
    const item = state.cart.cart.find((item) => item._id === productId);
    return item ? item.quantity : 1;
  };