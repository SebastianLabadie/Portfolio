import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";
import {Link} from 'react-router-dom'
import Wrapper from "../Wrapper";

let height = window.innerHeight
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
    grid-template-columns: repeat(4, auto);
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

  @media screen and (max-width: 800px) {
    .NavbarItems {
      
      padding: 2em;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;

      top: 0;
      left: -200vw;
      width: 100vw;
      height: 100%;
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
      top: 1.3em;
      right: 1.4em;
    }
    li {
      margin: 25px;
    }
    .nav-links {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 800px) {
    .close{
      top:0.8em;
      right:2em;
    }
    
  }
  @media screen and (max-width: 479px) {
    .close{
      top:1em;
    }
  }
  @media screen and (max-width: 414px) {
    .close{
      top:0.9em;
    }
  }

  

`;


const Navbar = () => {
  
  const [clicked, setClicked] = useState(false);
  
  
  const handleClickOpen=(e)=>{
    setClicked(!clicked)
    document.body.classList.add('stop-scrolling') 
  }
  const handleClickClose=(e)=>{
    setClicked(!clicked)
    document.body.classList.remove('stop-scrolling') 
  }
    const RenderMenuItems = MenuItems.map((item, i) => {
      return (
        <li key={i}>
          <Link onClick={e => setClicked(false)} to={item.url} className={item.cName}>
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
          </ul>
        </nav>
      </Wrapper>
    </NavbarStyled>
  );
};

export default Navbar;
