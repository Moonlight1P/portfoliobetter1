import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #282c34;
  min-height: 50vh;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-family: 'Roboto';
  margin-bottom: 2rem;
  color: #C147E9;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  background-color: #333;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  animation: ${fadeIn} 1.5s ease-out forwards;
  &:hover {
    transform: scale(1.05) translateY(0);
    box-shadow: 0 4px 8px rgba(227, 231, 9, 0.3);
  }
  h3 {
    margin-bottom: 0.5rem;
    font-family: 'League spartan';
    font-size: 1.75rem;
  }
  p {
    font-size: 1.1rem;
    font-family: 'League spartan';
    color: #E0E0E0;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  span {
    display: block;
    font-family: 'League spartan';
    font-size: 1rem;
    color: #A0A0A0;
    margin-bottom: 1rem;
  }
`;

const Extracurricular = () => {
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

    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <Section ref={sectionRef} id="extracurricular">
      <Container>
        <Title>Extracurricular</Title>
        <ActivityList>
          <ActivityItem className="animate">
            <h3>BizSim Challenge</h3>
            <span>2024</span>
            <p>Participated in Business simulation challenge organized by Shiv Nadar University, Noida.
            This event was to simulate building of a startup and make decisions based on real-world scenarios.</p>
          </ActivityItem>
          <ActivityItem className="animate">
            <h3>Cyber Security Conclave</h3>
            <span>2024</span>
            <p>Attended two-days Conclave and gained knowledge about cyber security what it means in real-life. Gained insights into various cybersecurity approaches from professionals working across different departments. </p>
          </ActivityItem>
          <ActivityItem className="animate">
            <h3>Capture The Flag (CTF) Competitions</h3>
            <span>2024, 2025</span>
            <p>Participated in multiple cybersecurity CTFs including: <b>KPMG Hackathon CTF</b>, <b>Bypass CTF - organized by AIT Pune</b>, <b>EHax CTF - hosted by Technical Society, DTU.</b> Solved challenges in areas such as web exploitation, reverse engineering, cryptography, and network security.</p>
          </ActivityItem>
        </ActivityList>
      </Container>
    </Section>
  );
};

export default Extracurricular;
