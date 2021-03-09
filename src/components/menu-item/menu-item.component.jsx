import React from "react";
import { withRouter } from "react-router-dom";
import {
    MenuItemContainer,
    BackgroundImage,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer  size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage
                style={{ backgroundImage: `url(${imageUrl})`}} 
            />
        <ContentContainer>
            <ContentTitle>{ title.toUpperCase() }</ContentTitle>
            <ContentSubtitle>Shop Now</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);