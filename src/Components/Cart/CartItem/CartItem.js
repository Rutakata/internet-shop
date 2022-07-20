import React from "react";
import style from "./CartItem.module.css";
import AttributeBlock from "../../../Common/ProductAttributes/AttributeBlock";
import attributeStyle from "../../../Common/ProductAttributes/AttributeBlock.module.css";
import colorStyle from "../../../Common/ProductAttributes/AttributeItems/ColorItem/ColorItem.module.css";
import sizeStyle from "../../../Common/ProductAttributes/AttributeItems/SizeItem/SizeItem.module.css"
import GalleryButton from "./GalleryButton";
import ProductNumberButton from "../../../Common/ProductNumberButton/ProductNumberButton";


const CartItem = (props) => {
    return (
        <div className={style.cartItemBody}>
            <div className={style.cartItemBody__info}>
                <h2 className={style.cartItemBody__info_name}>{props.product.name}</h2>
                <h2 className={style.cartItemBody__info_brand}>{props.product.brand}</h2>
                <span className={style.cartItemBody__info_price}>
                    {props.product.prices[props.currentCurrency].currency.symbol}
                    {props.product.prices[props.currentCurrency].amount}
                </span>

                {props.product.attributes.map((attribute) => (
                    <AttributeBlock attribute={attribute} style={attributeStyle} colorStyle={colorStyle}
                                    sizeStyle={sizeStyle} handleAttributeChange={null}
                                    key={attribute.name} productId={props.product.id}/>
                ))}
            </div>
            <div className={style.cartItemBody__numberBlock}>
                <ProductNumberButton style={style.cartItemBody__numberBlock_button}
                                     changeProductNumber={props.changeProductNumber} id={props.product.id}
                                     productNumber={props.product.number + 1} symbol="+"
                                     currentCurrency={props.currentCurrency}/>

                <div className={style.cartItemBody__numberBlock_number}>{props.product.number}</div>
                <ProductNumberButton style={style.cartItemBody__numberBlock_button}
                                     changeProductNumber={props.changeProductNumber} id={props.product.id}
                                     productNumber={props.product.number - 1} symbol="-"
                                     currentCurrency={props.currentCurrency}/>
            </div>
            <div className={style.cartItemBody__gallery}>
                <img src={props.product.gallery[props.currentImage]} className={style.cartItemBody__gallery_image} alt="Product"/>
                <div className={style.cartItemBody__gallery_buttonsWrapper}>
                    <GalleryButton imageNumber={props.currentImage - 1} setGalleryImage={props.setGalleryImage}
                                   symbol="<"/>
                    <GalleryButton imageNumber={props.currentImage + 1} setGalleryImage={props.setGalleryImage}
                                   symbol=">"/>
                </div>
            </div>
        </div>
    )
}

export default CartItem
