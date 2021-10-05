import React from 'react'
import "../../Component/Header/Header.scss"
import playLogo from '../../Asset/prep-tube-logo.png';

function Header() {
    return (
        <div className="header">
            <h1>PrepTube</h1>
            {/* <img className="header__logo" src={playLogo} alt='logo'/> */}
        </div>
    )
}

export default Header
