import React from "react";
import style from "./DropdownCartItem.module.css"
import AttributeBlock from "../../../Common/ProductAttributes/AttributeBlock";
import colorStyle from "../../../Common/ProductAttributes/AttributeItems/ColorItem/ColorItemMini.module.css";
import sizeStyle from "../../../Common/ProductAttributes/AttributeItems/SizeItem/SizeItemMini.module.css";
import attributeBlockStyle from "../../../Common/ProductAttributes/AttributeBlockMini.module.css";


const DropdownCartItem = (props) => {
    return (
        <div className={style.dropdownCartItemBody}>
            <div className={style.dropdownCartItemBody__info}>
                <h3 className={style.dropdownCartItemBody__info_name}>{props.product.name}</h3>
                <span className={style.dropdownCartItemBody__info_price}>
                    {props.product.prices[props.currentCurrency].currency.symbol}
                    {props.product.prices[props.currentCurrency].amount}
                </span>
                <div className={style.dropdownCartItemBody__info__attributes}>
                    {
                        props.product.attributes.map((attribute, index) => (
                            <AttributeBlock attribute={attribute} colorStyle={colorStyle} sizeStyle={sizeStyle}
                                            style={attributeBlockStyle} handleAttributeChange={props.handleAttributeChange}
                                            key={index} productId={props.product.id}/>)
                        )
                    }
                </div>
            </div>
            <div className={style.dropdownCartItemBody__productNumber}>
                <div className={style.dropdownCartItemBody__productNumber_button} onClick={() => {
                    props.handleNumberChange(props.product.id, props.product.number+1)
                }}>
                    +
                </div>

                <div>{props.product.number}</div>

                <div className={style.dropdownCartItemBody__productNumber_button} onClick={() => {
                    props.handleNumberChange(props.product.id, props.product.number-1)
                }}>
                    -
                </div>
            </div>
            <div className={style.dropdownCartItemBody__productImage}>
                <img src={props.product.gallery[0]} alt="product"/>
            </div>
        </div>
    )
}

export default DropdownCartItem