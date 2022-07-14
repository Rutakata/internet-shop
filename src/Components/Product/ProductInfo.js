import React from "react";
import style from "./ProductInfo.module.css"
import ImageSetItem from "./ImageSetItem/ImageSetItem";
import AttributeBlock from "./AttributeItems/AttributeBlock";
import PriceBlock from "./PriceBlock/PriceBlock";


const ProductInfo = (props) => {
    return (
        <div className={style.productPage}>
            <div className={style.productPage__imageSet}>
                {props.product.gallery.map(image => (<ImageSetItem src={`${image}`}
                                                                   setCurrentImage={props.setCurrentImage}/>))}
            </div>
            <div className={style.productPage__currentImage}>
                <img src={props.currentImage} className={style.currentImage__image}/>
            </div>
            <div className={style.productPage__productInfo}>
                <h1 className={style.productInfo__name}>{props.product.name}</h1>
                <h2 className={style.productInfo__brand}>{props.product.brand}</h2>

                {
                    props.product.attributes.map(attribute => (<AttributeBlock attribute={attribute}/>))
                }

                <PriceBlock symbol={props.product.prices[0].currency.symbol} price={props.product.prices[0].amount}/>

                <button className={style.productInfo_addToCart}
                        onClick={() => {props.addProductToCart(props.product)}}>
                    Add to cart
                </button>

                <p dangerouslySetInnerHTML={{__html: props.product.description}} className={style.productInfo_description}/>
            </div>
        </div>
    )
}

export default ProductInfo