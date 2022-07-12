import React from "react";
import style from "./ImageSetItem.module.css"


const ImageSetItem = (props) => {
    return (
        <div className={style.imageSetItemBody}>
            <img src={props.src} alt={"image-set"}
                 onMouseEnter={() => props.setCurrentImage(props.src)} className={style.imageSetItem}/>
        </div>
    )
}

export default ImageSetItem