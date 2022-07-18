import React from "react";
import style from "./CartItem.module.css";


const GalleryButton = (props) => {
    return (
        <div className={style.cartItemBody__gallery_button} onClick={() => {
            props.setGalleryImage(props.imageNumber)
        }}>{props.symbol}</div>
    )
}

export default GalleryButton