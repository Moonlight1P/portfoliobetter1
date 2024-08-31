import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f5f5f5;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProjectTitle = styled.h3`
  margin: 1rem 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description for project one.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Description for project two.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    // Add more projects as needed
  ];

  return (
    <Section id="projects">
      <Container>
        <Title>My Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default Projects;