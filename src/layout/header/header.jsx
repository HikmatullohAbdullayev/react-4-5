import React from 'react';
import headerStyle from "./header.module.css"
import headerLogo from "./../../assets/img/logo.png"
export const Header = () =>{
    return(
        <>
           <div className={`${headerStyle.header}`}>
            <div className={`${headerStyle.container} ${headerStyle.box}`} >
            <img className={headerStyle.logo} src={headerLogo} alt='logo'/>
            <nav className={headerStyle.nav}>
                <ul className={headerStyle.list}>
                    <li className={headerStyle.list__item}>Home</li>
                    <li className={headerStyle.list__item}>Pages</li>
                    <li className={headerStyle.list__item}>Product</li>
                    <li className={headerStyle.list__item}>Blog</li>
                    <li className={headerStyle.list__item}>Shop</li>
                    <li className={headerStyle.list__item}>Contact</li>
                </ul>
            </nav>
            </div>
           </div>
        </>
    )
    }