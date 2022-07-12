import React from "react";
import ColorItem from "./ColorItem/ColorItem";
import SizeItem from "./SizeItem/SizeItem";
import style from "./AttributeBlock.module.css"


const AttributeBlock = (props) => {
    let attributeItems

    if (props.attribute.type === "swatch") {
        attributeItems = props.attribute.items.map(item => (<ColorItem item={item}/>))
    }else if (props.attribute.type === "text") {
        attributeItems = props.attribute.items.map(item => (<SizeItem item={item}/>))
    }

    return (
        <div className={style.attributeBlockBody}>
            <h2 className={style.attributeBlockBody__name}>{props.attribute.name}</h2>
            {attributeItems}
        </div>
    )
}

export default AttributeBlock