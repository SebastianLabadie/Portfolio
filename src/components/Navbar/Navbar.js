import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";
import {Link} from 'react-router-dom'
import Wrapper from "../Wrapper";
import lan from '../../images/language32.png'

const NavbarStyled = styled.div`
 
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  .NavbarItems {
    margin:0 1em;
    background: rgba(19, 20, 20, 1);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
  }
  .navbar-name {
    justify-self: start;
    cursor: pointer;
    font-size: 1.2em;
  }
  .nav-menu {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 2em;
    text-align: center;
    width: 70vw;
    justify-content: end;
  }

  .nav-links {
    color:#dadada;
    text-decoration: none;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background: #fff;
      transition: width 0.3s;
    }
    &:hover {
      color:rgb(224, 80, 80);
      &:after {
        width: 100%;
        transition: width 0.3s;
      }
    }
  }

  .fa-bars {
    color: #fff;
  }
  .menu-icon {
    display: none;
  }
.language-icon{
  display:flex;
  align-items:center;
  cursor:pointer;
  .language-img{
  width:25px;
  height:25px;
  background-image:url(${lan});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  p{
    letter-spacing:3px;
    margin-left:3px;
    font-size:1rem;
    font-weight:300;
  }
}
  @media screen and (max-width: 800px) {
    
    .nav-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;

      top: 0;
      left: -200vw;
      width: 100vw;
      height: 100%;
      max-height:100vh;
      background: rgba(19, 20, 20, 1);
      opacity: 1;
      z-index: 100;

      transition: all 0.8s ease;
    }
    .active {
      background: rgba(19, 20, 20, 1);
      left: 0vh;
      opacity: 1;
      transition: all 0.8 ease-out;
    }

    .menu-icon {
      display: block;
      font-size: 1.5em;
      cursor: pointer;
    }
    .close {
      position: absolute;
      top:2.5vh;
      right:3vw;
    }
    li {
      margin: 25px;
    }
    .nav-links {
      font-size: 3rem;
    }
  }

    
  
  @media screen and (max-width: 479px) {
    .close{
     right:5vw;; 
    }
  }
  @media screen and (max-width: 414px) {
    .close{
      right:6vw;;
    }
  }

  

`;


const Navbar = ({currentLocale,onClick}) => {
  
  const [clicked, setClicked] = useState(false);
  
    
  const handleClickOpen=(e)=>{
    setClicked(!clicked)
    document.body.classList.add('stop-scrolling') 
  }
  const handleClickClose=(e)=>{
    setClicked(!clicked)
    document.body.classList.remove('stop-scrolling') 
  }
  const handleClickLink=()=>{
    setClicked(false)
    document.body.classList.remove('stop-scrolling') 
  }
    const RenderMenuItems = MenuItems.map((item, i) => {
      return (
        <li key={i}>
          <Link onClick={handleClickLink} to={item.url} className={item.cName}>
            {item.title}
          </Link>
        </li>
      );
    });
  
  
  return (
    <NavbarStyled>
      <Wrapper>
        <nav className="NavbarItems">
          <h1 className="navbar-name">Sebastián L</h1>
          <div className="menu-icon open" onClick={handleClickOpen}>
            <i className="fas fa-bars"></i>
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            <div
              className="menu-icon close"
              onClick={handleClickClose}
            >
              <i className="fas fa-times"></i>
            </div>
            {RenderMenuItems}
            <div className="language-icon" onClick={onClick}>
              <div className="language-img"></div>
              <p>{currentLocale === "en" ? "ES" : "EN"}</p>
            </div>
          </ul>
        </nav>
      </Wrapper>
    </NavbarStyled>
  );
};

export default Navbar;
