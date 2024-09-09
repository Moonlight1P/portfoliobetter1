import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectImage2 from '../Assets/images.jfif';

// Keyframe Animations
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const hoverEffect = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: #282c34;
  min-height: 100vh;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  &.animate {
    animation: ${fadeInUp} 1s ease-out forwards;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Roboto';
  margin-bottom: 2rem;
  opacity: 0;
  transition: opacity 1s ease-out;
  animation-delay: 0.5s;

  &.animate {
    animation: ${fadeInUp} 1s ease-out forwards;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: transparent;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(227, 231, 9, 0.3);              
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  animation-delay: ${({ delay }) => delay}s;
  cursor: pointer;

  &:hover {
    animation: ${hoverEffect} 0.5s ease-in-out;
  }

  &.animate {
    animation: ${scaleUp} 1s ease-out forwards;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  color: #C147E9;
  font-family: 'Roboto';
  margin: 1rem 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  color: #E1D7C6;
  font-size: 1rem;
  font-family: 'League spartan';
  margin-bottom: 1rem;
`;

const PointsList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
`;

const PointItem = styled.li`
  margin-bottom: 0.5rem;
  font-family: 'League spartan';
  color: #E1D7C6;
`;

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);

      // Observe each project card
      const cards = section.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        observer.observe(card);
        card.style.animationDelay = `${index * 0.2}s`; // Stagger the animation delay
      });
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Online Shopping Chatbot',
      description: 'Developed a chatbot for an online shopping website using machine learning and artificial intelligence with Python. Key features:',
      points: [
        'Implemented using TensorFlow, Flask, and scikit-learn.',
        'Handled natural language processing with Numpy and JSON.',
      ],
      image: 'https://blog.happyfox.com/wp-content/uploads/2020/11/X-examples-of-chatbots-in-E-commerce_V1-01.png',
      link: 'https://github.com/Moonlight1P/Chatbot-E',
    },
    {
      title: 'Biometric face detection for Attendance System',
      description: 'Created a Facial Recognition system that focuses on getting attendance and make it accurate and easy to use for teachers.',
      points: [
        'Used OpenCV library, defined functions to capture facial features.',
        'Used React, Tensorflow, Flask for frontend and backend of web app.',
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2lb82EWLPCHbHvjQUFPUvjmvZ1D1q_bWjQ&s',
      link: '#',
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Created heart disease prediction system. The system can help identify individuals who are at high risk of heart disease.',
      points: [
        'Used python libraries to develop and train algorithm for predicting on basis of features like Age, Chest Pain, Cholesterol, Blood sugar etc.',
        'Used Django for back-end and HTML, CSS, Javascript in front-end.',
      ],
      image: ProjectImage2,
      link: '#',
    },
    // Add more projects as needed
  ];

  return (
    <Section ref={sectionRef} id="projects">
      <Container>
        <Title className="animate">My Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} className="project-card" delay={index * 0.2}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <PointsList>
                {project.points.map((point, idx) => (
                  <PointItem key={idx}>{point}</PointItem>
                ))}
              </PointsList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default Projects;
