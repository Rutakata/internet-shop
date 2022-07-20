import React from "react";
import style from "./Currency.module.css"


const Currency = (props) => {
    let handleSelectChange = (event) => {
        console.log(event.target.value)
        props.setCurrentCurrency(event.target.value)
        props.convertTotal(event.target.value)
    }

    return (
        <div>
            <select onChange={handleSelectChange} className={style.currencySelect}>
                {props.currencies.map((currency, index) => (
                    <option value={index} key={currency.label} className={style.currencySelect__option}>
                        {currency.symbol} {currency.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Currency