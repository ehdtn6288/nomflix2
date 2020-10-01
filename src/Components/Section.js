import React from "react";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.h1`
  font-size: 27px;
  margin-bottom: 20px;
  color: rgb(255, 255, 255, 0.8);
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 150px);
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

export default Section;
