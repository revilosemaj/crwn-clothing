import React from "react";

import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
    Name
} from "./cart-item.styles";

const CartItem = ({ item : { imageUrl, name, price, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt={name} />
        <ItemDetailsContainer>
            <Name>{name}</Name>
            <span className="price">{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;