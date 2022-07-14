import React from "react";
import ColorItem from "./AttributeItems/ColorItem/ColorItem";
import SizeItem from "./AttributeItems/SizeItem/SizeItem";


const AttributeBlock = (props) => {
    let attributeItems

    if (props.attribute.type === "swatch") {
        attributeItems = props.attribute.items.map(item => (<ColorItem item={item} style={props.colorStyle}/>))
    }else if (props.attribute.type === "text") {
        attributeItems = props.attribute.items.map(item => (<SizeItem item={item} style={props.sizeStyle}/>))
    }

    return (
        <div className={props.style.attributeBlockBody}>
            <h2 className={props.style.attributeBlockBody__name}>{props.attribute.name}</h2>
            {attributeItems}
        </div>
    )
}

export default AttributeBlock