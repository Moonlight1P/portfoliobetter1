import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Arial, sans-serif';
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </AppContainer>
  );
}

export default App;