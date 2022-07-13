import React from "react";
import style from "./ProductItem.module.css"
import cart from "../../../Common/Images/empty_cart_white.png"
import {Link} from "react-router-dom";


const ProductItem = (props) => {
    return (
        <div className={style.productBody}>
            <div className={style.productBody__imageBody}>
                <img src={props.product.gallery[0]} alt="Product" className={style.imageBody_image} />
            </div>
            <h1 className={style.productBody_name}>{props.product.name}</h1>
            <p className={style.productBody_price}>
                {props.product.prices[0].currency.symbol}{props.product.prices[0].amount}
            </p>
            <Link className={style.productBody__cartButton} to={"/product"}
                  onClick={() => props.setProductInfo(props.product)}>
                <img src={cart} alt="Cart" className={style.cartButton_image}/>
            </Link>
        </div>
    )
}

export default ProductItem