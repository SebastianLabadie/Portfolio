import React from "react";
import styled from "styled-components";
import pwa from './pwa.png'
const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  text-align:center;
  a{
    color:rgb(224, 80, 80);
    text-decoration:none;
  }
  img{
    max-width:90%;
    margin:0 auto;
  }
  h1{
    margin:1.5em 0;
  }

  @media (max-width:768px){
    h1{
      font-size:1.5em;
    }
  }

  @media (max-width:414px){
    h1{
      font-size:1em;
    }
  }
`;
function App() {
  return (
    <AppStyled>
      <div className="container">

      <h1>
        Sorry, I've a new portfolio: {" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sebastianlb.vercel.app/"
        >
          https://sebastianlb.vercel.app/
        </a>
      </h1>
      <h1>I migrated my portfolio to NextJS and turned it into Progressive Web App</h1>
      <img src={pwa} alt="pwa certificated"/>
      </div>
    </AppStyled>
  );
}

export default App;
