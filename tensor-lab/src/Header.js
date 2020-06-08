import React from 'react';
import logo from './img/other/logo.png';
import './css/Header.css';

function Header(){
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__headline-block">
            <div className="headline-block__row">
              <div className="row__logo">
                <img src={logo} alt="Tensor company logo" width="25px" height="20px"/>
              </div>
              <div className="row__headline">
                <span title="Tensor School">Tensor School</span>
              </div>
            </div>
            <div className="headline-block__border"/>
          </div>
          <div className="header__description">Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.</div>
        </div>
      </header>
    );
  }


export default Header;