import React from "react";
import ColorItem from "./AttributeItems/ColorItem/ColorItem";
import SizeItem from "./AttributeItems/SizeItem/SizeItem";
import {changeProductAttributes} from "../../Redux/cartReducer";


const AttributeBlock = (props) => {
    let attributeItems

    if (props.attribute.type === "swatch") {
        attributeItems = props.attribute.items.map((item, index) => (
            <ColorItem item={item} style={props.colorStyle} key={index} handleAttributeChange={props.handleAttributeChange}
                       id={props.attribute.name} isActive={item.isActive}
                       changeProductAttributes={props.changeProductAttributes} productId={props.productId} />))
    }else if (props.attribute.type === "text") {
        attributeItems = props.attribute.items.map((item, index) => (
            <SizeItem item={item} style={props.sizeStyle} key={index} handleAttributeChange={props.handleAttributeChange}
                      id={props.attribute.name} isActive={item.isActive}
                      changeProductAttributes={props.changeProductAttributes} productId={props.productId} />))
    }

    return (
        <div className={props.style.attributeBlockBody}>
            <h2 className={props.style.attributeBlockBody__name}>{props.attribute.name}</h2>
            {attributeItems}
        </div>
    )
}

export default AttributeBlock