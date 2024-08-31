import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Title>About Me</Title>
        <Text>
          [Your bio goes here. Talk about your background, experience, and interests.]
        </Text>
      </Container>
    </Section>
  );
};

export default About;