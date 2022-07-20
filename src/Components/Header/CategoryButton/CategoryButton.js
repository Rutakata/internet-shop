import React from "react";
import style from "../Header.module.css";
import {NavLink} from "react-router-dom";


const CategoryButton = (props) => {
    let categoryName = props.category.name[0].toUpperCase() + props.category.name.slice(1)
    return (
        <NavLink className={({isActive}) => isActive ? style.navigation__category_active: style.navigation__category}
                 activeClassName={style.navigation__category_active}
                 to={`/category/${props.category.name}`}>
            {categoryName}
        </NavLink>
    )
}

export default CategoryButton