import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import WorkProjectsLayout from './WorkProjectsLayout'
import WorkGitInfo from './WorkGitInfo'

const WorkStyled = styled.div`
  margin: 2em 1em;

  /* --------------MEDIA QUERYS---------------- */

  @media screen and (max-width: 768px) {
    margin: 2em 1.2rem;
  }
  
`;

const Work = () => {
  return (
    <Wrapper>
      <WorkStyled>
      <WorkProjectsLayout
       transitionDuration={0.7}
       projectName='Chat Realtime App' 
       projectDetail='This is an application in which you can create a room to talk in
       real time with friends or colleagues, it is made with socket.io
       api.'
       projectFrontend='React'
       projectBackend='Node, Express, Socket.io'
       projectLink='https://5f44364e080d4011818966ae--stupefied-montalcini-36e166.netlify.app/'
       />
       <WorkProjectsLayout
       transitionDuration={1}
       projectName='Notes App' 
       projectDetail='This is an application in which you can create, update and delete
       users, in turn they can create, update and delete notes.'
       projectFrontend='React, Bootstrap, Axios'
       projectBackend='Node, Express, Mongodb '
       projectLink='#'
       />
       <WorkProjectsLayout
       transitionDuration={1.3}
       projectName='Flag Project' 
       projectDetail='The purpose of this application is to be able to search the most
       relevant information of each country, created with restcountries
       api.'
       projectFrontend='React, Redux, Fetch, Styled Components'
       projectBackend=''
       projectLink='https://sebastianlabadie.github.io/flags-project/'
       />
        <WorkGitInfo />
      </WorkStyled>
    </Wrapper>
  );
};

export default Work;
