import React from "react";
import ColorItem from "./AttributeItems/ColorItem/ColorItem";
import SizeItem from "./AttributeItems/SizeItem/SizeItem";
import AttributeItemContainer from "./AttributeItems/AttributeItemContainer";

const AttributeBlock = (props) => {
    let attributeItems

    if (props.attribute.type === "swatch") {
        attributeItems = props.attribute.items.map((item, index) => (
            // <AttributeItemContainer item={item} style={props.colorStyle} key={index} handleAttributeChange={props.handleAttributeChange}
            //                         id={props.attribute.name} chosenAttributes={props.chosenAttributes}
            //                         render={(props, isActive) => <ColorItem {...props} isActive={isActive} /> } />))
            <ColorItem item={item} style={props.colorStyle}
                                                                                key={index}
                                                                                handleAttributeChange={props.handleAttributeChange}
                                                                                id={props.attribute.name}
                                                                                chosenAttributes={props.chosenAttributes}/>))
    }else if (props.attribute.type === "text") {
        attributeItems = props.attribute.items.map((item, index) => (<SizeItem item={item} style={props.sizeStyle}
                                                                               key={index}
                                                                               handleAttributeChange={props.handleAttributeChange}
                                                                               id={props.attribute.name}
                                                                               chosenAttributes={props.chosenAttributes}/>))
            // <AttributeItemContainer item={item} style={props.sizeStyle} key={index} handleAttributeChange={props.handleAttributeChange}
            //                         id={props.attribute.name} chosenAttributes={props.chosenAttributes}
            //                         render={(props, isActive) => <SizeItem {...props} isActive={isActive} /> } />))
    }

    return (
        <div className={props.style.attributeBlockBody}>
            <h2 className={props.style.attributeBlockBody__name}>{props.attribute.name}</h2>
            {attributeItems}
        </div>
    )
}

export default AttributeBlock