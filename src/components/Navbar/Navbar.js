import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";

const NavbarStyled = styled.div`
  box-shadow:0px 1px 3px rgba(0,0,0,0.20);
  .NavbarItems {
    padding: 1em;
    background: rgba(19,20,20,1);
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: #fff;
  }
  .navbar-name {
    color: #fff;
    justify-self: start;
    cursor: pointer;
    font-size:1.2em;
  }
  .nav-menu {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap:2em;
    text-align: center;
    width: 70vw;
    justify-content: end;
  }

  .nav-links {
    text-decoration: none;
    color: #fff;

    &:hover {
        color:#e05050;
      border-bottom:2px solid #fff;
    }
  }

  .fa-bars {
    color: #fff;
  }
  .menu-icon{
    display: none;
  }

  @media screen and (max-width:800px){
        .NavbarItems{
            position:relative;
            justify-content:space-between;
            padding:2em;
        }


        .nav-menu{
            display:flex;
            flex-direction:column;
            justify-content:center;
            position:absolute;

            top:0;
            left:-200vw;
            width:100vw;
            height:100vh;
            background:rgba(19,20,20,1);
            opacity:1;
            z-index:100;

            transition:all 0.8s ease;

        }
        .active{
            background:rgba(19,20,20,1);
            left:0vh;
            opacity:1;
            transition:all 0.8 ease-out;
        }

        .menu-icon{
            display:block;
            font-size:1.5em;
            cursor:pointer;
        }
        .close{
            position:absolute;
            top:1.3em;
            right:1.4em;
        }
        li{
            margin:25px;
        }
        .nav-links{
            font-size:3rem;
        }
  }
`;

const RenderMenuItems = MenuItems.map((item, i) => {
  return (
    <li key={i}>
      <a href={item.url} className={item.cName}>
        {item.title}
      </a>
    </li>
  );
});

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  console.log(clicked)
  return (
    <div className="container">
      <NavbarStyled>
        <nav className="NavbarItems">
          <h1 className="navbar-name">
            Sebastián L 
          </h1>
          <div className="menu-icon open" onClick={(e) => setClicked(!clicked)}>
                <i className='fas fa-bars'></i>
            </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <div className="menu-icon close" onClick={(e) => setClicked(!clicked)}>
                <i className='fas fa-times'></i>
            </div>
            {RenderMenuItems}
          </ul>
        </nav>
      </NavbarStyled>
    </div>
  );
};

export default Navbar;
