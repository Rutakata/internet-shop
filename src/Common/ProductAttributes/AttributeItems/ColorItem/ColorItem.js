import React from "react";
// import style from "./ColorItem.module.css"


const ColorItem = (props) => {
    return (
        <div className={props.style.colorItem} style={{backgroundColor: props.item.value}}></div>
    )
}

export default ColorItem