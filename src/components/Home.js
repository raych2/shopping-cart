import React from "react";
import styled from "styled-components";
import collection from "../images/laura-chouette-HaFYcr2ZelU-unsplash.jpg";
import StyledButton from "../shared/StyledButton";

const Background = styled.div`
  background: url(${collection});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 90vh;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-left: 80px;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 40px;
`;

const Home = () => {
  return (
    <Background>
      <Introduction>
        <Title>Beautiful Designer Fragrances</Title>
        <StyledButton>Shop Now</StyledButton>
      </Introduction>
    </Background>
  );
};

export default Home;
