import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import collection from "../images/laura-chouette-HaFYcr2ZelU-unsplash.jpg";
import StyledButton from "../shared/StyledButton";

const Background = styled.div`
  background: url(${collection});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 90vh;
  @media (max-width: 420px) {
    overflow: hidden;
  }
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
  @media (max-width: 420px) {
    width: 50vw;
    color: #fff;
  }
  @media (max-width: 1024px) {
    width: 50vw;
  }
`;

const Home = () => {
  return (
    <Background>
      <Introduction>
        <Title>Beautiful Designer Fragrances</Title>
        <Link to="/shop">
          <StyledButton>Shop Now</StyledButton>
        </Link>
      </Introduction>
    </Background>
  );
};

export default Home;
