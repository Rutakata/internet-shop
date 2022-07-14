import React from "react";
import style from "./DropdownCart.module.css"


const DropdownCart = (props) => {
    return (
        <div className={props.style}>
            <div className={style.dropdownCartBody}>
                <div className={style.dropdownCartBody__bagSize}>
                    <h2>My bag,</h2>
                    <span> {props.numberOfProducts} items</span>
                </div>
                {props.cart.map(product => (<div>{product.name}</div>))}
            </div>
        </div>
    )
}

export default DropdownCart