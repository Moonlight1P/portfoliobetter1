import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: transparent;
  top: 0;
  padding: 1rem 3rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo and the rest */
`;

const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  font-family: 'League spartan';
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  color: #C147E9;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    color: #FF8E9E;
  }
`;

const PortfolioLogo = styled.div`
  font-size: 2rem; /* Adjust the size to fit well with the navbar */
  font-weight: bold;
  color: #C147E9;
  cursor: pointer;
  font-family: 'Montserrat';
  display: flex;
  align-items: center;
  &:hover {
    color: #FF8E9E;
  }
`;

const GitHubButton = styled.a`
  background: transparent;
  color: #C147E9;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'League spartan';
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-left: 2rem; /* Space between GitHub button and nav items */
  &:hover {
    color: #FF8E9E;
  }
`;

const Header = () => {
  return (
    <Nav>
      <PortfolioLogo>
        <NavLink to="portfolio" smooth={true} duration={500}>Portfolio</NavLink>
      </PortfolioLogo>
      <NavItemsContainer>
        <NavList>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="experience" smooth={true} duration={500}>Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="skills" smooth={true} duration={500}>Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="education" smooth={true} duration={500}>Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
          </NavItem>
        </NavList>
        <GitHubButton href="https://github.com/Moonlight1P" target="_blank">
          GitHub
        </GitHubButton>
      </NavItemsContainer>
    </Nav>
  );
};

export default Header;