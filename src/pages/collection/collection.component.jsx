import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

import {
    CollectionPageContainer,
    Title,
    CollectionItemContainer
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
    <CollectionPageContainer>
        <Title>{ title }</Title>
        <CollectionItemContainer>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </CollectionItemContainer>
    </CollectionPageContainer>
)};

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);