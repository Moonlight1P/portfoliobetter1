import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #4F1787;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;                /* Flexbox layout */
  flex-wrap: wrap;              /* Wrap items to the next line */
  justify-content: flex-start; /* Align items to the start */
  gap: 1rem; /* Add consistent spacing between items */
`;

const SkillItem = styled.li`
font-size: 1.2rem;
margin: 1rem 0;
background-color: #333;       /* Dark background for skill items */
padding: 20px;                /* Padding inside skill items */
border-radius: 10px;          /* Rounded corners */
text-align: center;           /* Center the text */
color: white;               /* Text color */
width: calc(33.333% - 1rem);  /* Three items per row with space */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Shadow */
box-sizing: border-box;       /* Include padding and border in width calculation */

@media (max-width: 768px) {
  width: calc(50% - 1rem); /* Two items per row on smaller screens */
}

@media (max-width: 480px) {
  width: 100%; /* One item per row on very small screens */
}
`;

const Skills = () => {
  const skills = ['Java', 'Python', 'React', 'Javascript', 'CSS', 'Git', 'HTML', 'Flask', 'SQL'];

  return (
    <Section id="skills">
      <Container>
        <Title>My Skills</Title>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </Container>
    </Section>
  );
};

export default Skills;