import React from "react";
import style from "./Header.module.css"
import logo from "../../Common/Images/logo.png"
import empty_cart from "../../Common/Images/empty_cart.png"


const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.header__navigation}>
                {
                    props.categories.map(category => (<div key={category.name} className={style.navigation__category}>{category.name}</div>))
                }
                {/*<div className={style.navigation__category}>All</div>*/}
                {/*<div className={style.navigation__category}>Clothes</div>*/}
                {/*<div className={style.navigation__category}>Tech</div>*/}
            </div>
            <div className={style.header__logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={style.header__actions}>
                <div className={style.actions_action}>$ ^</div>
                <div className={style.actions_action}>
                    <img src={empty_cart} alt="empty_cart_image" className={style.actions_cart}/>
                </div>
            </div>
        </div>
    )
}

export default Header