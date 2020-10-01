import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 170px;
`;

const Loader = styled.span`
  font-size: 35px;
  color: rgb(255, 255, 255, 0.6);
`;

const Loading = () => {
  return (
    <Container>
      <Loader>Loading...</Loader>
    </Container>
  );
};

export default Loading;
