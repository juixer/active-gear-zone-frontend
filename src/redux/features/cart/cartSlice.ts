import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// CART TYPE
export type TCartItem = {
  _id: string;
  quantity: number;
  stockQuantity?: number;
  price?: number;
  name?: string;
  image?: string;
  totalPrice?: number;
};

// INTIALSTATE TYPE
type TInitialState = {
  cart: TCartItem[];
  cartNumber: number;
  inCart: number;
  subTotal: number;
};

// INTIALSTATE VARIABLE
const initialState: TInitialState = {
  cart: [],
  cartNumber: 1,
  inCart: 0,
  subTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // INCREMENT CART ITEM
    increment: (
      state,
      action: PayloadAction<{ _id: string; price: number }>
    ) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
        item.totalPrice = (item.totalPrice as number) + action.payload.price;
        state.inCart++;
      }
    },
    // DECREMENT CART ITEM
    decrement: (
      state,
      action: PayloadAction<{ _id: string; price: number }>
    ) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          item.totalPrice = (item.totalPrice as number) - action.payload.price;
          state.inCart--;
        }
      }
    },
    // ADD PRODUCT INTO CART
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
        state.inCart = item.quantity;
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
        state.inCart = action.payload.quantity;
      }
    },
    // PRODUCT DETAILS CART NUMBER INCREMENT
    incrementCartNumber: (state) => {
      state.cartNumber++;
    },
    // PRODUCT DETAILS CART NUMBER DECREMENT
    decrementCartNumber: (state) => {
      if (state.cartNumber > 1) {
        state.cartNumber--;
      }
    },
    // PRODUCT DETAILS CART NUMBER CHANGED BY VALUE
    changeCartNumberByValue: (state, action: PayloadAction<number>) => {
      state.cartNumber = action.payload;
    },
    // CLICK CHECKOUT IT WILL SET SUBTOTAL IN STORE
    checkOut: (state, action: PayloadAction<number>) => {
      state.subTotal = action.payload;
    },
    // REMOVE PRODUCT FROM CART
    removeProduct: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      state.inCart -= action.payload.quantity;
    },
    // CLEAR CART AFTER CHECKOUT
    clearCart: (state) => {
      state.cart = [];
      state.cartNumber = 0;
      state.inCart = 0;
      state.subTotal = 0;
    },
  },
});

export const {
  increment,
  decrement,
  addToCart,
  incrementCartNumber,
  decrementCartNumber,
  changeCartNumberByValue,
  checkOut,
  removeProduct,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCurrentQuantity = (state: RootState, productId: string) => {
  const item = state.cart.cart.find((item) => item._id === productId);
  return item ? item.quantity : 0;
};

export const SelectCartItems = (state: RootState) => state.cart.cart;

export const selectCartNumber = (state: RootState) => state.cart.cartNumber;

export const selectInCart = (state: RootState) => state.cart.inCart;

export const selectSubTotal = (state: RootState) => state.cart.subTotal;
