import React from "react";


const ProductNumberButton = (props) => {
    return (
        <div className={props.style} onClick={() => {
            props.changeProductNumber(props.id, props.productNumber)}}>
            {props.symbol}
        </div>
    )
}

export default ProductNumberButton