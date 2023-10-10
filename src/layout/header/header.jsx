import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/"><li className={headerStyle.list__item}>Home</li></Link>
                    <Link to="/pages"><li className={headerStyle.list__item}>Pages</li></Link>
                    <Link to="/product"><li className={headerStyle.list__item}>Product</li></Link>
                    
                    
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
    // <Link  to="/">Home</Link>
    // <Link to="/product">Product</Link>
    // <Link target='blank' to="/product-card">ProductCard</Link>