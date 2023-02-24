import React from 'react';
import c from './Header.module.css';

import logo from './img/Logo.svg'
import serch from './img/serch.svg'
import basket from './img/basket.svg'
import user from './img/user.svg'

const Header = () => {
    return (
        <header>
            <div className={c.logo}>
                <a href="/">
                    <img src={logo} width="106" height="27" alt=''/>
                </a>
            </div>
            <div className={c.menu}>
                <ul className={c.items}>
                    <li><a href="/">home</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">product</a></li>
                    <li><a href="/">blog</a></li>
                    <li><a href="/">shop</a></li>
                    <li><a href="/">contact us</a></li>
                </ul>
            </div>
            <div className={c.more}>
                <a href="/">
                    <img src={serch} width="16" height="16" alt=''/>
                </a>
                <a href="/">
                    <img src={basket} width="27" height="20.27" alt=''/>
                </a>
                <a href="/">
                    <img src={user} width="35" height="35" alt=''/>
                </a>
            </div>
        </header>
    );
}

export default Header;