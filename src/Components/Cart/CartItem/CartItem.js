import React from "react";
import style from "./CartItem.module.css";
import AttributeBlock from "../../../Common/ProductAttributes/AttributeBlock";
import attributeStyle from "../../../Common/ProductAttributes/AttributeBlock.module.css";
import colorStyle from "../../../Common/ProductAttributes/AttributeItems/ColorItem/ColorItem.module.css";
import sizeStyle from "../../../Common/ProductAttributes/AttributeItems/SizeItem/SizeItem.module.css"


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
                                    sizeStyle={sizeStyle} handleAttributeChange={props.handleAttributeChange}
                                    key={attribute.name} productId={props.product.id}/>
                ))}
            </div>
            <div className={style.cartItemBody__numberBlock}>
                <div className={style.cartItemBody__numberBlock_button}>+</div>
                <div className={style.cartItemBody__numberBlock_number}>{props.product.number}</div>
                <div className={style.cartItemBody__numberBlock_button}>-</div>
            </div>
            <div className={style.cartItemBody__gallery}>
                <img src={props.product.gallery[0]} className={style.cartItemBody__gallery_image}/>
            </div>
        </div>
    )
}

export default CartItem
