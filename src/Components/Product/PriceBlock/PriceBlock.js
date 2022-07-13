import React from "react";
import style from "./PriceBlock.module.css"


const PriceBlock = (props) => {
    return (
        <div className={style.priceBlock}>
            <h2 className={style.priceBlock_name}>Price</h2>
            <div className={style.priceBlock_price}>{props.symbol}{props.price}</div>
        </div>
    )
}

export default PriceBlock