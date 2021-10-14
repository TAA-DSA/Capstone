import React from "react";
import "../LoginForm/LoginForm.scss";

function LoginForm() {
  return (
    <form>
      <div className="formInput">
        <h2 className="formInput__title">Preptube Login</h2>
        <div className="formInput__container">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Passwprd</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button className="formInput__button">Login</button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
