import React from "react";
import style from "./DropdownCart.module.css";
import DropdownCartItemContainer from "./DropdownCartItem/DropdownCartItemContainer";
import {Link} from "react-router-dom";


const DropdownCart = (props) => {
    return (
        <div className={props.style} style={{display: props.showCart}} onClick={props.handleShowCart}>
            <div className={style.dropdownCartBody} onClick={e => e.stopPropagation()}>
                <div className={style.dropdownCartBody__bagSize}>
                    <h2>My bag,</h2>
                    <span> {props.numberOfProducts} items</span>
                </div>
                {props.cart.map(product => (<DropdownCartItemContainer product={product} />))}
                <div className={style.dropdownCartBody__buttons}>
                    <Link to={"/cart"}>
                        <button className={style.dropdownCartBody__buttons__viewBag}>View bag</button>
                    </Link>
                    <button className={style.dropdownCartBody__buttons__checkOut}>Check out</button>
                </div>
            </div>
        </div>
    )
}

export default DropdownCart