import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
    CheckoutPageContainer,
    CheckoutHeader,
    HeaderBlock,
    TotalContainer,
    TestWarning
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
               <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <TotalContainer>
          <span>TOTAL : ${total}</span>
        </TotalContainer>
        <TestWarning>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 12/22 - CVV: 123
        </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems,
  total : selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);