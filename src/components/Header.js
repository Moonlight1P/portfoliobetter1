import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: #2b3034;
  top: 0;
  padding: 1rem 3rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between; 
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

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px; /* Height of the navbar */
    left: 0;
    width: 100%;
    background-color: #2b3034;
    z-index: 10;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0; /* Add space between items in mobile view */
    text-align: center; /* Center align for mobile view */
  }
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
  font-size: 2rem;
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
  margin-left: 2rem;

  &:hover {
    color: #FF8E9E;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  padding-right: 10px;
  cursor: pointer;
  color: #C147E9;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <HamburgerMenu onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </HamburgerMenu>
      <PortfolioLogo>
        <NavLink to="portfolio" smooth={true} duration={500}>Portfolio</NavLink>
      </PortfolioLogo>
      <NavItemsContainer>
        <NavList isOpen={isOpen}>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500} onClick={toggleMenu}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="experience" smooth={true} duration={500} onClick={toggleMenu}>Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="education" smooth={true} duration={500} onClick={toggleMenu}>Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</NavLink>
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
