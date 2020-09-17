import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import WorkProjectsLayout from "./WorkProjectsLayout";
import WorkGitInfo from "./WorkGitInfo";

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
          projectName="Amazon Clone"
          projectDetail="This is an Amazon clone app, you can login-logout, buy products and view the basket, all dynamic using Context api"
          projectFrontend="React,Styled-Components,MaterialUI,Context"
          projectBackend="Firebase"
          projectDeployFrontend="(deploy: Netlify)"
          projectDeployBackend=""
          projectLink="https://amazon-clone99.netlify.app/"
        />
          <WorkProjectsLayout
            transitionDuration={1}
            projectName="Whatsapp Clone"
            projectDetail="This is wpp web clone, you can login and chat in realtime in a room."
            projectFrontend="React, MaterialUI, Axios,Styled Components"
            projectBackend="Node, Express, Mongodb,Firebase "
            projectDeployFrontend="(deploy: Netlify)"
            projectDeployBackend="(deploy: Atlas,Heroku)"
            projectLink="https://wpp-clone.netlify.app/"
          />
        <WorkProjectsLayout
          transitionDuration={1.3}
          projectName="Flag Project"
          projectDetail="The purpose of this application is to be able to search the most relevant information of each country, created with restcountries api."
          projectFrontend="React, Redux, Fetch, Styled Components"
          projectDeployFrontend="(deploy: Github Pages)"
          projectDeployBackend="none"
          projectLink="https://sebastianlabadie.github.io/flags-project/"
        />
        <WorkProjectsLayout
          transitionDuration={1.5}
          projectName="Notes App"
          projectDetail="This is an application in which you can create, update and delete users, in turn they can create, update and delete notes."
          projectFrontend="React, Bootstrap, Axios"
          projectBackend="Node, Express, Mongodb "
          projectDeployFrontend="(deploy: Github Pages)"
          projectDeployBackend="(deploy: Atlas,Heroku)"
          projectLink="https://sebastianlabadie.github.io/CRUD-MERN/"
        />
        <WorkGitInfo />
      </WorkStyled>
    </Wrapper>
  );
};

export default Work;
