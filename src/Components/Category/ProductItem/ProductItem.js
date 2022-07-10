import React from "react";
import style from "./ProductItem.module.css"


const ProductItem = (props) => {
    return (
        <div className={style.productBody}>
            <img src={props.image} alt="Product image" className={style.productBody_image}/>
            <h1 className={style.productBody_name}>{props.name}</h1>
            <p className={style.productBody_price}>{props.label}{props.amount}</p>
        </div>
    )
}

export default ProductItem