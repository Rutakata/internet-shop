import React from "react";
// import style from "./ColorItem.module.css"


const ColorItem = (props) => {
    return (
        <div className={props.isActive ? props.style.colorItem_active: props.style.colorItem}
             style={{backgroundColor: props.item.value}}
             onClick={() => {props.handleAttributeChange(props.id, props.item.value, props.productId)}}>
        </div>
    )
}

export default ColorItem