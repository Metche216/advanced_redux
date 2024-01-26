import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], toggleShowCart: false };
const initialProductsState = {
  items: [
    { title: "Product 1", price: 6, desctiption: "First product" },
    { title: "Product 2", price: 10, desctiption: "Second product" },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.toggleShowCart = !state.toggleShowCart;
    },
    addToCart(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      if (existingCartItemIndex >= 0) {
        state.items[existingCartItemIndex].quantity += 1;
        console.log("quantity increased");
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        console.log("first time added");
      }
    },
    incrementCartItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.title === action.payload
      );

      state.items[existingCartItemIndex].quantity += 1;
    },
    decrementCartItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.title === action.payload
      );

      if (existingCartItemIndex >= 0) {
        const selectedItem = state.items[existingCartItemIndex];
        if (selectedItem.quantity > 1) {
          state.items[existingCartItemIndex].quantity -= 1;
        } else {
          state.items.splice(existingCartItemIndex,1)
        }
      }
    },
  },
});

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
});

export const cartActions = cartSlice.actions;

export default store;
