import React from "react";
import loaderStyle from './loading.module.css'

export const Loader = () =>{
    return(
        <>
            <h1 className={loaderStyle.title}>loading...</h1>
        </>
    )
}