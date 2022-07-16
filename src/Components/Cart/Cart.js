import React from "react";
import style from "./Cart.module.css"
import CartItemContainer from "./CartItem/CartItemContainer";


const Cart = (props) => {
    return (
        <div className={style.cartBlock}>
            <h1 className={style.cartBlock__header}>CART</h1>
            {props.products.map(product => (<CartItemContainer product={product.product}/>))}
        </div>
    )
}

export default Cart