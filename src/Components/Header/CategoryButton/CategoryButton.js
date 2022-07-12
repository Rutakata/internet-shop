import React from "react";
import style from "../Header.module.css";


const CategoryButton = (props) => {
    return (
        <div className={style.navigation__category} onClick={() => {props.changeCurrentCategory(props.category.name)}}>
            {props.category.name}
        </div>
    )
}

export default CategoryButton