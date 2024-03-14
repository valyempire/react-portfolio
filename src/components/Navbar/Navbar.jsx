import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileMenuLink,
  NavLinkStyled,
} from "./NavbarStyles";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { bio } from "../../utils";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="https://www.linkedin.com/in/valerica-bocanel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="3rem" color="rgb(0, 176, 252)" />
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLinkStyled to="/">About</NavLinkStyled>
          <NavLinkStyled to="/skills">Skills</NavLinkStyled>
          <NavLinkStyled to="/experience">Experience</NavLinkStyled>
          <NavLinkStyled to="/projects">Projects</NavLinkStyled>
          <NavLinkStyled to="/education">Education</NavLinkStyled>
          <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileMenuLink
              to="/"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileMenuLink>
            <MobileMenuLink
              to="/skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileMenuLink>
            <MobileMenuLink
              to="/experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileMenuLink>
            <MobileMenuLink
              to="/projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileMenuLink>
            <MobileMenuLink
              to="/education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileMenuLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
