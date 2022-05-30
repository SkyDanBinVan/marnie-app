import React, { useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    const [isMenu, setIsMenu] =  useState(false);
    const menuClass = `menu-btn ${isMenu ? "open" : ""}`
    const rightSideId = isMenu ? "hidden" : ""
    return (
        <>
        <header>
            <div className='leftSide'>
                <Link onClick={() => setIsMenu(false)} to="/"><img className="marnie" src="/Marnie450x450.png" alt="MarnieBot" /></Link>
                <h1><Link onClick={() => setIsMenu(false)} to="/">MarnieBot</Link></h1>
            </div>
            <div className={menuClass} onClick={() => setIsMenu(!isMenu)}>
                <div className="menu-btn-burger"></div>
            </div>
            <nav className='rightSide' id={rightSideId}>
                <ul dir='rtl'>
                    <li><Link onClick={() => setIsMenu(false)} to="/">Home</Link></li>
                    <li><Link onClick={() => setIsMenu(false)} to="/twitch">Twitch</Link></li>
                    <li><Link onClick={() => setIsMenu(false)} to="/merch">Merch</Link></li>
                    <li><Link onClick={() => setIsMenu(false)} to="/commands">Commands</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header
