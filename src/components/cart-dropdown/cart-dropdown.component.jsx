import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import {
    CartDropdownContainer,
    CartItemContainer,
    EmptyMessage,
    CheckoutButton
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemContainer>
            { cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
            )
            }
        </CartItemContainer>
        <CheckoutButton 
            onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}
        >GO CHECKOUT</CheckoutButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));