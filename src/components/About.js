import React from "react";
import Wrapper from "./Wrapper";
import styled from "styled-components";
import profileImg from "../images/FotoCarne.jpg";
import { motion } from "framer-motion";

const height = window.innerHeight;
const AboutStyled = styled.div`
  min-width:100vw;
  margin: 3em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .containerInfoAndSkills {
    display: grid;
    margin: 2em 0;
    line-height: 1.5;
    grid-template-columns: repeat(auto-fill, 45%);
    grid-gap: 10%;

    .title {
      font-size: 36px;
      text-align: center;
    }
    .info {
      display: inline;
      font-size: 20px;
      font-weight: 400;
      position: relative;
      top: 1em;
    }
    .containerInfo {
      margin: 0 2em;
    }
    .containerSkills {
      margin: 0 2em;

      .skills {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-weight: 400;
        line-height: 2;
        margin: 0.8em 0;
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .container {
      width: 90%;
      height: 92%;
       img {
        width:380px;
    } 

    .containerInfoAndSkills {
      .title {
        font-size: 30px;
        text-align: center;
      }
      .info {
        font-size: 18px;
      }
      .containerSkills {
        .skills {
          font-size: 18px;
        }
      }
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
    .containerInfoAndSkills {
      .title {
        font-size: 24px;
        text-align: center;
      }
      .containerInfo {
        margin: 0 0 0 1.2rem;
      }
      .info {
        font-size: 16px;
      }
      .containerSkills {
        .skills {
          font-size: 16px;
        }
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

    .containerInfoAndSkills {
      width:60%;
        grid-template-columns:1fr;
        grid-gap:30px;
        margin:auto;

      .title {
        margin-top:1em;
      }
        .containerSkills{
          margin:0 0 0 1.2rem;
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
    
    .containerInfoAndSkills {
      width:96%;
      .containerInfo {
        margin: 0 0 0 .5rem;
      }
      .containerSkills{
          margin:0 0 0 .5rem;
        }
    }
  }
  @media screen and (max-width: 490px) {
      .containerInfoAndSkills {
        .containerInfo {
        margin: 0 0 0 .9rem;
      }
      .containerSkills{
          margin:0 0 0 .9rem;
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
      .containerInfoAndSkills {
        .containerInfo {
        margin: 0 0 0 1.2rem;
      }
      .containerSkills{
          margin:0 0 0 1.2rem;
        }
      }
      
    }
    
  }
  @media screen and (max-width: 370px) {
    .containerInfoAndSkills {
      
        grid-gap:20px;
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
          <div className="containerInfoAndSkills">
            <div className="containerInfo">
              <h2 className="title">Something about me</h2>
              <p className="info">Hello!</p>
              <p className="info ml red">I'm Sebastian - Web Developer</p>
              <p className="info ml">
                from Canelones, Uruguay. I am currently a software engineering
                student. I have no prior experience working in a company, but
                you can see my demos on the work page. I like frontend &
                backend, and of course the minimalist and elegant websites.
              </p>
            </div>
            <div className="containerSkills">
              <h2 className="title">My knowledge</h2>
              <div className="skills">
                <p>HTML</p>
                <p>CSS 3</p>
                <p>JavaScript</p>
                <p>Bootstrap</p>
                <p>React JS</p>
                <p>Redux</p>
                <p>Node JS</p>
                <p>Express</p>
                <p>Firebase</p>
                <p>MongoDB</p>
                <p>NPM</p>
                <p>Git</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AboutStyled>
    </Wrapper>
  );
};

export default About;
