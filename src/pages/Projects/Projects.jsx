/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Description,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyles";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import { projects } from "../../utils/projects";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Description>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "html-css" ? (
            <ToggleButton
              active
              value="html-css"
              onClick={() => setToggle("html-css")}
            >
              HTML & CSS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="html-css"
              onClick={() => setToggle("html-css")}
            >
              HTML & CSS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "javascript" ? (
            <ToggleButton
              active
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              JavaScript
            </ToggleButton>
          ) : (
            <ToggleButton
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              JavaScript
            </ToggleButton>
          )}
          <Divider />
          {toggle === "react" ? (
            <ToggleButton
              active
              value="react"
              onClick={() => setToggle("react")}
            >
              React JS
            </ToggleButton>
          ) : (
            <ToggleButton value="react" onClick={() => setToggle("react")}>
              React JS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "full-stack" ? (
            <ToggleButton
              active
              value="full-stackact"
              onClick={() => setToggle("full-stack")}
            >
              Full-Stack
            </ToggleButton>
          ) : (
            <ToggleButton
              value="full-stack"
              onClick={() => setToggle("full-stack")}
            >
              Full-Stack
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCards
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCards
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
