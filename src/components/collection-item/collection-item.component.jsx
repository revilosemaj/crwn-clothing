import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
    CollectionItemContainer,
    ImageContainer,
    CollectionFooter,
    Name,
    Price,
    AddToCartButton
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item
    return (
        <CollectionItemContainer>
            <ImageContainer
                style={{ 
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionFooter>
                <Name> { name }</Name>
                <Price className="price"> { price } </Price>
            </CollectionFooter>
            <AddToCartButton onClick={() => addItem(item)} inverted >Add to cart</AddToCartButton>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);