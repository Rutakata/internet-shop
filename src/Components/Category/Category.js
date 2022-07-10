import React from "react";
import style from "./Category.module.css"
import ProductItem from "./ProductItem/ProductItem";


const Category = (props) => {
    return (
        <div className={style.categoryPage}>
            {props.products.map(product => (<ProductItem name={product.name} amount={product.prices[0].amount}
                                                         label={product.prices[0].currency.symbol}
                                                         image={product.gallery[0]}/>))}
        </div>
    )
}

export default Category