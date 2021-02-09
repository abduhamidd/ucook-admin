import React from "react";
import {Link} from "react-router-dom";

import {Card, Alert} from "antd";
import LoginForm from "./form/LoginForm";

const LoginPage = () => {
  return (
    <div className='login-page'>
      <Card>
        <div className='login-page__top'>
          <div className='login-page__header'>
            <Link to='/'>
              {/*<Logo className="login-page__logo" />*/}
              <span className='login-page__title'>Ucook</span>
            </Link>
          </div>
          <div className='login-page__desc'>
            Enter your information for Log in
          </div>
        </div>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
