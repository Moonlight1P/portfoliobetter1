import React from 'react';
import styled from 'styled-components';
import ProfileImage1 from '../Assets/image.png';

const HomeSection = styled.section`
  padding: 4rem 2rem;
  background: #4F1787;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
`;

const Container = styled.div`
  width: 90%; /* Increased width for more space */
  height: 100%; /* Make the container fill the section's height */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Ensures wrapping on smaller screens */
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 2rem;
  width: 30%;
  color: #E1D7C6;
`;

const Title = styled.h1`
  font-size: 50px;
  padding-bottom: 10px;
  margin-bottom: 1rem;
  justify-content: center;
  text-align: center; /* Center align the text */
  color: #C147E9;
`;

const Subtitle = styled.h2`
  font-size: 30px;
  margin-bottom: 1rem;
  color: #E1D7C6;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;



const Home = () => {
  return (
    <HomeSection>
    <Container>
    <TextContainer>
      <Title>Welcome to My Port<span>folio</span></Title>
      <Subtitle>I'm Pratyush Moon</Subtitle>
    </TextContainer>
    <ImageContainer>
      <ProfileImage src={ProfileImage1} alt="Pratyush Moon" />
    </ImageContainer>
    </Container>
    </HomeSection>
  );
};

export default Home;