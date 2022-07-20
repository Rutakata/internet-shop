import React from "react";
import spinner from "../Images/spinner.gif"
import style from "./LoadingPage.module.css"


const LoadingPage = () => {
    return (
        <div className={style.loadingBody}>
            <img src={spinner} alt="Loading..." className={style.loadingBody__spinner}/>
        </div>
    )
}

export default LoadingPage