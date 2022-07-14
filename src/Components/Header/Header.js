import React from "react";
import style from "./Header.module.css"
import logo from "../../Common/Images/logo.png"
import empty_cart from "../../Common/Images/empty_cart.png"
import CategoryButton from "./CategoryButton/CategoryButton";
import DropdownCartContainer from "../DropdownCart/DropdownCartContainer";


const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.header__navigation}>
                { props.categories.map(category =>
                    (<CategoryButton category={category} changeCurrentCategory={props.changeCurrentCategory}
                                        key={category.name}/>)
                )}
            </div>
            <div className={style.header__logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={style.header__actions}>
                <div className={style.actions_currency}>$ ^</div>
                <div className={style.actions_cart} onClick={props.handleShowCart}>
                    <img src={empty_cart} alt="empty_cart_image" className={style.actions_cart_img}/>
                </div>
                <DropdownCartContainer style={style.dropdownCartWrapper} showCart={props.showCart}
                                       handleShowCart={props.handleShowCart}/>
            </div>
        </div>
    )
}

export default Header