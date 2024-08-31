import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: #333;
  padding: 1rem 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #f0a500;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="about" smooth={true} duration={500}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="skills" smooth={true} duration={500}>Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Header;