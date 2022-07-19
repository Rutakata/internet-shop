import React from "react";
import style from "./PriceBlock.module.css"

const PriceBlock = (props) => {
    return (
        props.currencies.length !== 0 ?
        <div className={style.priceBlock}>
            <span className={style.priceBlock__section}>Tax 21%:</span>
            <span className={style.priceBlock__data}>
                {props.currencies[props.currentCurrency].symbol}{(props.total*0.21).toFixed(2)}
            </span>
            <span className={style.priceBlock__section}>Quantity:</span>
            <span className={style.priceBlock__data}>{props.quantity}</span>
            <span className={style.priceBlock__section}>Total:</span>
            <span className={style.priceBlock__data}>
                {props.currencies[props.currentCurrency].symbol}{props.total}
            </span>
        </div>
            :<div>Loading...</div>
    )
}

export default PriceBlock