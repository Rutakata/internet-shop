import React from "react";
import style from "./Cart.module.css"
import CartItemContainer from "./CartItem/CartItemContainer";
import PriceBlock from "./PriceBlock/PriceBlock";


const Cart = (props) => {
    return (
        <div className={style.cartBlock}>
            <h1 className={style.cartBlock__header}>CART</h1>
            {props.products.length === 0 ? <div className={style.cartBlock__empty}>Empty</div> :
                <>
                {props.products.map(product => (<CartItemContainer product={product}/>))}
                    <PriceBlock total={props.total} currencies={props.currencies} currentCurrency={props.currentCurrency}
                    quantity={props.quantity}/>
                    <button className={style.cartBlock__orderButton}>Order</button>
                </>
            }
        </div>
    )
}

export default Cart