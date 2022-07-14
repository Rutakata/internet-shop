import React from "react";
// import style from "./SizeItem.module.css"


const SizeItem = (props) => {
    return (
        <div className={props.style.sizeItem}>{props.item.value}</div>
    )
}

export default SizeItem