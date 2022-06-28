import React from "react";
import { ArrowSpan, CardDetails, ImgCard, ProductBtnMoreInfo, ProductCard, ProductImg, ProductName, ProductPrice } from "./FeaturedProducts.style";

function ProductItem(props) {
    return (
        <ProductCard> 
            <ImgCard>
                <ProductImg src={props.item['images']}/>
            </ImgCard> 
            <CardDetails >
                <ProductName>{props.item['name']}</ProductName>
                <ProductPrice>{props.item['price']}</ProductPrice>
                <ProductBtnMoreInfo>More Info <ArrowSpan>→</ArrowSpan></ProductBtnMoreInfo>
            </CardDetails>
        </ProductCard>
    )
}

export default ProductItem;