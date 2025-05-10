import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import styled from 'styled-components';
import Extracurricular from './components/Extracurricular';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Arial, sans-serif';
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Portfolio />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Extracurricular />
      <Contact />
    </AppContainer>
  );
}

export default App;