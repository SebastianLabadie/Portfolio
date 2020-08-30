import React from "react";
import styled from "styled-components";
import backgroundImg from "../images/asd.png";
import backgroundImg2 from "../images/asd2.png";
import Wrapper from "./Wrapper";
import moduleName from "module";
import { motion } from "framer-motion";

const WorkStyled = styled.div`
  margin: 2em 1em;
  .containers {
    display: flex;
    margin: 2em 0;
    .imgMobile {
      display: none;
    }
    img {
      width: 600px;
      height: 460px;
      outline: none;
      border-radius: 10px;
      /*  background:url(${backgroundImg}) center center/cover; */
    }
    .title {
      margin-bottom: 15px;
      font-size: 36px;
    }
    .info {
      width: 60%;
      margin-left: 20px;

      .demo {
        margin: 1em 0;
      }
      p {
        line-height: 1.55;
        font-weight: 500;
        font-size: 24px;
        a {
          cursor: pointer;
          text-decoration: none;
          color: #00f;
        }
      }
    }
    .frontend1 {
      &:after {
        content: "(deploy: Netlify)";
        color: rgb(224, 80, 80);
      }
    }
    .backend1 {
      &:after {
        content: "(deploy: Heroku)";
        color: rgb(224, 80, 80);
      }
    }
    .frontend2 {
      &:after {
        content: "(deploy: Github Pages)";
        color: rgb(224, 80, 80);
      }
    }
    .backend2 {
      &:after {
        content: "(deploy: Mlab,Heroku)";
        color: rgb(224, 80, 80);
      }
    }
    .frontend3 {
      &:after {
        content: "(deploy: Github Pages)";
        color: rgb(224, 80, 80);
      }
    }
  }
  .container-github {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2%;
    font-size: 24px;
    line-height: 1.55;
    font-weight: 500;
    .container-git-info {
      padding-right: 15px;
      p {
        a {
          margin-left: 6px;
          cursor: pointer;
          text-decoration: none;
          color: #00f;
        }
      }
      .title {
        font-size: 36px;
        margin-bottom: 15px;
      }
    }
    .container-git-repositories {
      padding-top: 70px;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      span {
        color: #8f8e8e;
      }
      a {
        cursor: pointer;
        text-decoration: none;
        color: #00f;
      }
    }
  }
  /* --------------MEDIA QUERYS---------------- */
  @media screen and (max-width: 1280px) {
    .containers {
      img {
        width: 530px;
        height: 425px;
      }
      .info {
        p {
          font-size: 20px;
        }
      }
    }
    .container-github {
      font-size: 20px;
      .container-git-info {
        .title {
          font-size: 36px;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .containers {
      img {
        width: 450px;
        height: 380px;
      }
      .info {
        p {
          font-size: 18px;
        }
      }
    }
    .container-github {
      font-size: 18px;
      .container-git-info {
        .title {
          font-size: 36px;
        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    .containers {
      img {
        width: 410px;
        height: 380px;
      }
      .info {
        .title {
          font-size: 26px;
        }
        p {
          font-size: 18px;
        }
      }
    }
    .container-github {
      font-size: 18px;
      .container-git-info {
        .title {
          font-size: 26px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 1em;
    padding: 42px;
    .containers {
      flex-direction: column;
      img {
        width: 100%;
        height: auto;
      }
      .info {
        margin: 16px 0 0 0;
        width: 100%;
        .title {
          font-size: 26px;
        }
        p {
          font-size: 18px;
        }
      }
    }
    .container-github {
      font-size: 18px;
      grid-template-columns: 1fr;
      grid-gap: 10%;
      .container-git-info {
        .title {
          font-size: 26px;
        }
      }
      .container-git-repositories {
        padding-top: 0px;
      }
    }
  }
  @media screen and (max-width: 550px) {
    .containers {
      .info {
        .title {
          font-size: 22px;
        }
        p {
          font-size: 16px;
        }
      }
    }
    .container-github {
      font-size: 16px;
      .container-git-info {
        .title {
          font-size: 22px;
        }
      }
      .container-git-repositories {
        grid-template-columns: 1fr;
        a {
          margin-bottom: 25px;
        }
      }
    }
  }
  @media screen and (max-width: 414px) {
    .containers {
      img {
        min-height: 220px;
      }
      .info {
        .title {
          font-size: 20px;
        }
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
    x: "-100vw",
  },
};

const Work = () => {
  return (
    <Wrapper>
      <WorkStyled>
        <motion.div
          initial={pageVariants.outX}
          animate={pageVariants.inX}
          exit={pageVariants.outX}
          transition={{ duration: 1 }}
          className="containers"
        >
          <img src={backgroundImg} alt="img" />
          <div className="info">
            <h2 className="title">Chat Realtime App </h2>
            <p>
              This is an application in which you can create a room to talk in
              real time with friends or colleagues, it is made with socket.io
              api.
            </p>
            <p className="demo">
              You can see the demo here: <a href="#">Link</a>
            </p>
            <p>What i use for this?</p>
            <p className="frontend1">Frontend: React </p>
            <p className="backend1">Backend: Node, Express, Socket.io </p>
          </div>
        </motion.div>
        <motion.div
          initial={pageVariants.outX}
          animate={pageVariants.inX}
          exit={pageVariants.outX}
          transition={{ duration: 1.5 }}
          className="containers"
        >
          <img src={backgroundImg} alt="img" />
          <div className="info">
            <h2 className="title">Notes App</h2>
            <p>
              This is an application in which you can create, update and delete
              users, in turn they can create, update and delete notes.
            </p>
            <p className="demo">
              You can see the demo here: <a href="https://sebastianlabadie.github.io/flags-project/">Link</a>
            </p>
            <p>What i use for this?</p>
            <p className="frontend2">Frontend: React, Bootstrap, Axios </p>
            <p className="backend2">Backend: Node, Express, Mongodb </p>
          </div>
        </motion.div>
        <motion.div
          initial={pageVariants.outX}
          animate={pageVariants.inX}
          exit={pageVariants.outX}
          transition={{ duration: 2 }}
          className="containers"
        >
          <img src={backgroundImg} alt="img" />
          <div className="info">
            <h2 className="title">Flag Project</h2>
            <p>
              The purpose of this application is to be able to search the most
              relevant information of each country, created with restcountries
              api.
            </p>
            <p className="demo">
              You can see the demo here: <a href="#">Link</a>
            </p>
            <p>What i use for this?</p>
            <p className="frontend3">Frontend: React, Redux, Fetch, Styled Components </p>
          </div>
        </motion.div>
        <div className="container-github">
          <div className="container-git-info">
            <h2 className="title">GitHub Projects.</h2>
            <p>
              Here are some of my projects that I created during my spare time.
              I constantly keep on improving my skills by making these fun
              projects. These projects are available on my
              <a href="https://github.com/SebastianLabadie">
                github repository
              </a>
            </p>
          </div>
          <div className="container-git-repositories">
            <a href="https://sebastianlabadie.github.io/react-todo-list-app/">
              <span>/01</span> TODO
            </a>
            <a href="https://sebastianlabadie.github.io/react-todo-list-app/">
              <span>/02</span> TODO
            </a>
            <a href="https://sebastianlabadie.github.io/react-todo-list-app/">
              <span>/03</span> TODO
            </a>
            <a href="https://sebastianlabadie.github.io/react-todo-list-app/">
              <span>/04</span> TODO
            </a>
            <a href="https://sebastianlabadie.github.io/react-todo-list-app/">
              <span>/05</span> TODO
            </a>
            <a href="https://sebastianlabadie.github.io/react-todo-list-app/">
              <span>/06</span> TODO
            </a>
          </div>
        </div>
      </WorkStyled>
    </Wrapper>
  );
};

export default Work;
