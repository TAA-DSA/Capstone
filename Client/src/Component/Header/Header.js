import React from "react";
import { Link } from "react-router-dom";
import "../../Component/Header/Header.scss";

function Header() {
  return (
    <div className="header">
      <Link className="homepage" to="/">
        <h1>PrepTube</h1>
      </Link>
      {/* <img className="header__logo" src={playLogo} alt='logo'/> */}
    </div>
  );
}

export default Header;
