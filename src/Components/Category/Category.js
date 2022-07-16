import React from "react";
import style from "./Category.module.css"
import ProductItem from "./ProductItem/ProductItem";


const Category = (props) => {
    return (
        <div className={style.categoryPage}>
            {props.products.map(product => (<ProductItem product={product} key={product.id}
                                                         setProductInfo={props.setProductInfo}
                                                         currentCurrency={props.currentCurrency} />))}
        </div>
    )
}

export default Category