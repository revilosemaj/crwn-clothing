import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemCounts = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accQuantity, currItem) => accQuantity + currItem.quantity,0)
);