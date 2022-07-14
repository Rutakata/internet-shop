import React from "react";
import style from "./DropdownCart.module.css";
import DropdownCartItemContainer from "./DropdownCartItem/DropdownCartItemContainer";


const DropdownCart = (props) => {
    return (
        <div className={props.style} style={{display: props.showCart}} onClick={props.handleShowCart}>
            <div className={style.dropdownCartBody} onClick={e => e.stopPropagation()}>
                <div className={style.dropdownCartBody__bagSize}>
                    <h2>My bag,</h2>
                    <span> {props.numberOfProducts} items</span>
                </div>
                {props.cart.map(product => (<DropdownCartItemContainer product={product}/>))}
            </div>
        </div>
    )
}

export default DropdownCart