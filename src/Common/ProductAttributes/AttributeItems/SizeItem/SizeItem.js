import React from "react";
// import style from "./SizeItem.module.css"


const SizeItem = (props) => {
    return (
        <div className={props.style.sizeItem}
             onClick={() => props.handleAttributeChange(props.id, props.item.value)}>
            {props.item.value}
        </div>
    )
}

export default SizeItem