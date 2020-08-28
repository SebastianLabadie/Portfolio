import React from "react";
import Wrapper from "./Wrapper";
import styled from "styled-components";
import profileImg from "../images/FotoCarne.jpg";

const height = window.innerHeight;
const AboutStyled = styled.div`
  height: ${height}px;

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
      width: 50%;
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

  @media screen and (max-width: 940px) {
    margin: 0;

    .container {
      width: 100%;
      height: 80%;
    }
    .containerInfoAndSkills {
      .title {
        font-size: 24px;
        text-align: center;
      }
      .containerInfo {
        margin: 0 0 0 1em;
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
    height: calc(${height}px * 1.4 );
    .containerImg {
      height: 44%;
      img{
        height:88%;
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
          margin:0 0 0 1em;
        }
    }
  }
  @media screen and (max-width: 578px) {
    height: calc(${height}px * 1.4 );
    .containerImg {
      height: 36%;
      img{
        height:88%;
      }
    }
    .containerInfoAndSkills {
      width:100%;
    }
  }
  @media screen and (max-width: 414px) {
    height: calc(${height}px * 1.2 );
    .container{
      padding:38px;
    }
    .containerImg {
      height: 36%;
      img{
        width:68%;
      }
    }
    .containerInfoAndSkills {
      width:100%;
    }
  }
  @media screen and (max-width: 370px) {
    .containerInfoAndSkills {
        grid-gap:10px;
        }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <AboutStyled>
        <div className="container">
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
        </div>
      </AboutStyled>
    </Wrapper>
  );
};

export default About;
