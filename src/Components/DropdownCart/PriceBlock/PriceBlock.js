import React from "react";
import style from "../DropdownCart.module.css";


const PriceBlock = (props) => {
    return (
        <div className={props.style.dropdownCartBody__totalPrice}>
            <span className={props.style.dropdownCartBody__totalPrice_total}>Total</span>
            <span className={props.style.dropdownCartBody__totalPrice_price}>
                {props.currencies[props.currentCurrency]?.symbol}{props.total}
            </span>
        </div>
    )
}

export default PriceBlock