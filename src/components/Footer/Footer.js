import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
const FooterStyled = styled.div`
  width: 100;
  background: #0d0e0e;
  color: #dadada;
  font-size: 0.9em;
  .container {
    margin: 1em 0;
    padding: 1em;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 6.2em;
  }
  .info {
    margin-top: 0.8em;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5em;
    a{
        position:relative;
        text-decoration:none;
        color:#dadada;

        i{
            position:relative;
            display:inline-block;
            top:-3px;
            right:-5px;
            transform:rotate(50deg);
            color:red;
            font-size:11px;
        }
    }
  }
  

  @media screen and (max-width: 1000px) {
      .container{
          grid-gap:4.4em;
      }
  }
  @media screen and (max-width: 900px) {
      .container{
          grid-gap:3em;
          grid-template-columns:repeat(2,auto);
        
      }

  }
  @media screen and (max-width: 500px) {
      
      .container{
        grid-template-columns:repeat(auto-fill,70vw);
        justify-content:center;
      }
  }

`;

const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="container">
          <div className="containers ">
            <h3>Thank you!</h3>
            <div className="info">
              <p>
                Thank you for taking an interest in my portfolio. If you would
                like to talk about any of my projects, or just chat, I'd love to
                hear from you!
              </p>
            </div>
          </div>
          <div className="containers">
            <h3>Contact</h3>
            <div className="info">
              <p>sebastianlabadie.contact@gmail.com</p>
            </div>
          </div>
          <div className="containers">
            {/*poner iconos*/}
            <h3>Social Links</h3>
            <div className="info">
            <a href="">Github<i class="fas fa-long-arrow-alt-up"></i></a>
              <a href="">Linkdin<i class="fas fa-long-arrow-alt-up"></i></a>
              <a href="">Instagram<i class="fas fa-long-arrow-alt-up"></i></a>
            </div>
          </div>
          <div className="containers">
            {/*poner iconos*/}
            <h3>Resumen</h3>
            <div className="info">
              <a href="">C.V<i class="fas fa-long-arrow-alt-up"></i></a>
            </div>
          </div>
        </div>
      </Wrapper>
    </FooterStyled>
  );
};

export default Footer;
