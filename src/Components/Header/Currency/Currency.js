import React from "react";


const Currency = (props) => {
    let handleSelectChange = (event) => {
        console.log(event.target.value)
        props.setCurrentCurrency(event.target.value)
        props.currentCurrency(event.target.value)
    }

    return (
        <div>
            <select onChange={handleSelectChange}>
                {props.currencies.map((currency, index) => (
                    <option value={index} key={index}>
                        {currency.symbol} {currency.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Currency