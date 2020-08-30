import React from "react";
import styled from "styled-components";
import backgroundImg from "../images/homeBack.png";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

let height = window.innerHeight;
const HomeStyled = styled.div`
  position: relative;
  height: ${height}px;
  min-height: 720px;
  background-image: url(${backgroundImg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;

  .name {
    &:after {
      content: " Sebastián Labadie";
      color: rgb(224, 80, 80);
    }
  }
  .text {
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    top: 25%;
    left: 16px;
    font-size: 70px;
    width: 98%;
  }
  .work {
    font-size: 24px;
    margin-top: 2em;
    font-weight: 500;
  }
  .see {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    width: 48.2%;
    left: 16px;
    position: relative;
    top: 56%;
  }
  .separator-one {
    position: relative;
    top: 50%;
    left: 16px;
    height: 1px;
    width: 48.2%;
    background: rgb(255, 70, 70);
    z-index: 90;
  }
  .separator-two {
    position: relative;
    top: 49.9%;
    left: 50.5%;
    height: 1px;
    width: 48.2%;
    background: rgb(255, 70, 70);
    z-index: 90;
  }

  @media screen and (max-width: 1080px) {
    background-size: 800px;
    .text {
      font-size: 56px;
    }
  }
  @media screen and (max-width: 838px) {
    .text {
      top: 26%;
    }
    background-size: 700px;
    .name {
      font-size: 48px;
    }
    .full {
      font-size: 48px;
    }
    .see {
      width: 47.2%;
    }
    .separator-one {
      width: 46.2%;
    }
    .separator-two {
      width: 46.2%;
    }
  }
  @media screen and (max-width: 720px) {
    .see {
      top: 52.5%;
    }
    .separator-one {
      top: 43.5%;
    }
    .separator-two {
      top: 43.4%;
    }
  }

  @media screen and (max-width: 670px) {
    background-size: 600px;
    .name {
      font-size: 36px;
    }
    .full {
      font-size: 36px;
    }
    .work {
      font-size: 20px;
    }
    .see {
      font-size: 16px;
    }
    .see {
      top: 62.5%;
      width: 45.2%;
    }
    .separator-one {
      top: 52.5%;
      width: 45.2%;
    }
    .separator-two {
      top: 52.4%;
      width: 45.2%;
    }
  }
  @media screen and (max-width: 538px) {
    .see {
      top: 56.5%;
    }
    .separator-one {
      top: 49.5%;
    }
    .separator-two {
      top: 49.4%;
    }
  }
  @media screen and (max-width: 501px) {
    .see {
      top: 51.5%;
    }
    .separator-one {
      top: 43.5%;
    }
    .separator-two {
      top: 43.4%;
    }
  }
  @media screen and (max-width: 480px) {
    .name {
      font-size: 29px;
    }
    .full {
      font-size: 29px;
    }
    .work {
      font-size: 16px;
    }
    .see {
      font-size: 14px;
      top: 64.5%;
    }
    .separator-one {
      top: 57.5%;
    }
    .separator-two {
      top: 57.4%;
    }
  }

  @media screen and (max-width: 430px) {
    background-size: 500px;
    .text {
      top: 22%;
    }
    .separator-one {
      width: 45.2%;
    }
    .separator-two {
      width: 45.2%;
    }
  }
  @media screen and (max-width: 413px) {
    .see {
      top: 60.5%;
    }
    .separator-one {
      top: 52.5%;
    }
    .separator-two {
      top: 52.4%;
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
  inX2: {
    opacity: 1,
    x: 0,
  },
  outX2: {
    opacity: 0,
    x: "+100vw",
  },
  inY: {
    opacity: 1,
    y: 0,
  },
  outY: {
    opacity: 0,
    y: "-40px",
  },
};

const Home = () => {
  return (
    <Wrapper>
      <HomeStyled>
        <motion.div
          initial={pageVariants.outX}
          animate={pageVariants.inX}
          exit={pageVariants.outX}
          transition={{ duration: 1.5 }}
          className="text"
        >
          <p className="name">Hello, I'm</p>
          <p className="full">I'm a full-stack web developer.</p>
          <p className="work">
            I am currently looking for work as a MERN developer.
          </p>
        </motion.div>

        <motion.p 
        initial={pageVariants.outY} 
        animate={pageVariants.inY} 
        exit={pageVariants.outY}   transition={{ duration: 1 }}
        className="see">
          In the menu you will find my portfolio with detailed works
        </motion.p>

        <motion.div
          initial={pageVariants.outX}
          animate={pageVariants.inX}
          exit={pageVariants.outX}
          transition={{ duration: 1.5 }}
          className="separator-one"
        />

        <motion.div
          initial={pageVariants.outX2}
          animate={pageVariants.inX2}
          exit={pageVariants.outX2}
          transition={{ duration:  1.5 }}
          className="separator-two"
        />
      </HomeStyled>
    </Wrapper>
  );
};

export default Home;
