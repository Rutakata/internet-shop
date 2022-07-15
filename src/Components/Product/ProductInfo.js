import React from "react";
import style from "./ProductInfo.module.css"
import ImageSetItem from "./ImageSetItem/ImageSetItem";
import AttributeBlock from "../../Common/ProductAttributes/AttributeBlock";
import PriceBlock from "./PriceBlock/PriceBlock";
import colorStyle from "../../Common/ProductAttributes/AttributeItems/ColorItem/ColorItem.module.css"
import sizeStyle from "../../Common/ProductAttributes/AttributeItems/SizeItem/SizeItem.module.css"
import attributeBlockStyle from "../../Common/ProductAttributes/AttributeBlock.module.css"


const ProductInfo = (props) => {
    return (
        <div className={style.productPage}>
            <div className={style.productPage__imageSet}>
                {props.product.gallery.map((image, index) => (<ImageSetItem src={`${image}`}
                                                                   setCurrentImage={props.setCurrentImage}
                                                                   key={index}/>))}
            </div>
            <div className={style.productPage__currentImage}>
                <img src={props.currentImage} className={style.currentImage__image}/>
            </div>
            <div className={style.productPage__productInfo}>
                <h1 className={style.productInfo__name}>{props.product.name}</h1>
                <h2 className={style.productInfo__brand}>{props.product.brand}</h2>

                {
                    props.product.attributes.map((attribute, index) => (<AttributeBlock attribute={attribute} colorStyle={colorStyle}
                                                                               sizeStyle={sizeStyle}
                                                                               style={attributeBlockStyle} key={index}/>))
                }

                <PriceBlock symbol={props.product.prices[0].currency.symbol} price={props.product.prices[0].amount}/>

                <button className={props.product.inStock ?
                    style.productInfo_addToCart:
                    style.productInfo_addToCart_disabled}
                        onClick={() => {props.addProductToCart(props.product)}}>
                    Add to cart
                </button>

                <p dangerouslySetInnerHTML={{__html: props.product.description}} className={style.productInfo_description}/>
            </div>
        </div>
    )
}

export default ProductInfo