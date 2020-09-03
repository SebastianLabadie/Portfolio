import React from "react";
import Wrapper from "../Wrapper";
import styled from "styled-components";
import profileImg from "../../images/FotoCarne.jpg";
import { motion } from "framer-motion";
import LayoutInfoAndSkills from './LayoutInfoAndSkills'
const AboutStyled = styled.div`
  min-width:100vw;
  margin: 3em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height:100vh;
  .ml {
    margin-left: 8px;
  }
  .red {
    color: rgb(224, 80, 80);
  }
  .containerImg {
    height: 60%;
    width: 100%;
    display: flex;
    img {
      height: 100%;
       width: 550px; 
      margin: auto;
      border-radius: 10px;
      border: none;
      outline: none;
      object-fit: fill;
      max-width: 100%;
    }
  }
  .container {
    width: 80%;
    height: 100%;
    justify-content: center;
    margin:2em 0;
  }
  

  @media screen and (max-width: 1280px) {
    .container {
      width: 90%;
      height: 92%;
       img {
        width:380px;
    } 

  }
}
  @media screen and (max-width: 940px) {
    margin: 0;

    .container {
      width: 100%;
      height: 80%;
      img{
        height: 85%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .containerImg {
      height: 44%;
      img{
        height:88%;
        width:350px;
      }
    }

  }
  @media screen and (max-width: 578px) {
    .containerImg {
      height: 36%;
      img{
        height:88%;
        width:310px;
      }
    }
  }
  
  @media screen and (max-width: 414px) {
    align-items:flex-start;
   
    .containerImg {
      height: 36%;
      img{
        width:270px;
      }
      
    }
    
  }
`;

const pageVariants = {
  inX: {
    opacity: 1,
    x: 0,
  },
  outX: {
    opacity: 0,
    x: "-90vw",
  }
};


const About = () => {
  return (
    <Wrapper>
      <AboutStyled>
        <motion.div 
        initial={pageVariants.outX}
        animate={pageVariants.inX}
        exit={pageVariants.outX}
        transition={{ duration: 1 }}
        className="container">
          <div className="containerImg">
            <img src={profileImg} alt="" />
          </div>
          <LayoutInfoAndSkills />
          
        </motion.div>
      </AboutStyled>
    </Wrapper>
  );
};

export default About;
