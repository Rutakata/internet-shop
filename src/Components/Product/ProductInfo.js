import React from "react";
import {Link} from "react-router-dom";


const ProductInfo = (props) => {
    return (
        <div>
            <img src={props.product.gallery[0]}/>
            <h1>{props.product.name}</h1>

            <Link to={"/category"}>
                Go back
            </Link>
        </div>
    )
}

export default ProductInfo