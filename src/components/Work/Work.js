import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import WorkProjectsLayout from "./WorkProjectsLayout";
import WorkGitInfo from "./WorkGitInfo";
import {useIntl} from 'react-intl'


const WorkStyled = styled.div`
  margin: 2em 1em;

  /* --------------MEDIA QUERYS---------------- */

  @media screen and (max-width: 768px) {
    margin: 2em 1.2rem;
  }
`;

const Work = () => {
  const intl=useIntl()
  return (
    <Wrapper>
      <WorkStyled>
        <WorkProjectsLayout
          transitionDuration={0.7}
          projectName="Amazon Clone"
          projectDetail= {intl.messages['work.amazon.projectDetail']}
          projectFrontend="React,Styled-Components,MaterialUI,Context"
          projectBackend="Firebase"
          projectDeployFrontend="(deploy: Netlify)"
          projectDeployBackend=""
          projectLink="https://amazon-clone99.netlify.app/"
        />
          <WorkProjectsLayout
            transitionDuration={1}
            projectName="Whatsapp Clone"
            projectDetail={intl.messages['work.whatsapp.projectDetail']}
            projectFrontend="React, MaterialUI, Axios,Styled Components"
            projectBackend="Node, Express, Mongodb,Firebase "
            projectDeployFrontend="(deploy: Netlify)"
            projectDeployBackend="(deploy: Atlas,Heroku)"
            projectLink="https://wpp-clone.netlify.app/"
          />
        <WorkProjectsLayout
          transitionDuration={1.3}
          projectName="Flag Project"
          projectDetail={intl.messages['work.flags.projectDetail']}
          projectFrontend="React, Redux, Fetch, Styled Components"
          projectDeployFrontend="(deploy: Github Pages)"
          projectDeployBackend="none"
          projectLink="https://sebastianlabadie.github.io/flags-project/"
        />
        <WorkProjectsLayout
          transitionDuration={1.5}
          projectName="Notes App"
          projectDetail={intl.messages['work.notes.projectDetail']}
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
