import {
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLinkStyled,
  Copyright,
} from "./FoterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Valerica Bocanel</Logo>
        <Nav>
          <NavLinkStyled to="/" className="nav-link">
            About
          </NavLinkStyled>
          <NavLinkStyled to="/skills" className="nav-link">
            Skills
          </NavLinkStyled>
          <NavLinkStyled to="/experience" className="nav-link">
            Experience
          </NavLinkStyled>
          <NavLinkStyled to="/projects" className="nav-link">
            Projects
          </NavLinkStyled>
          <NavLinkStyled to="/education" className="nav-link">
            Education
          </NavLinkStyled>
          <NavLinkStyled to="/contact" className="nav-link">
            Contact
          </NavLinkStyled>
        </Nav>

        <Copyright>
          &copy; 2024 Valerica Bocanel. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
