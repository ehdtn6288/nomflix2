import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  padding: 25px;
  border-radius: 10px;
`;

const Name = styled.div`
  font-size: 20px;
`;

const PartsBox = styled.div`
  margin-top: 25px;
  max-height: 400px;
  min-height: 150px;
  overflow: auto;
  width: 100%;
  display: grid;
  justify-content: left;
  grid-gap: 27px;
  grid-template-columns: repeat(auto-fit, 130px);
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(47, 54, 64);
    border-radius: 5px;
  }
`;
const Part = styled.div`
  width: 130px;
`;
const PartPoster = styled.img`
  width: 130px;
  border-radius: 5px;
`;
const PartTitle = styled.div`
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Year = styled.span`
  font-size: 10px;
  opacity: 0.6;
`;
const Seasons = ({
  location: {
    state: { seasons },
  },
}) => {
  console.log(seasons);
  return (
    <Container>
      <Name>Seasons</Name>
      <PartsBox>
        {seasons.map((season, index) => (
          <Part key={index}>
            <PartPoster
              src={
                season.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${season.poster_path}`
                  : require("../assets/noPosterSmall.png")
              }
            />
            <PartTitle>
              {season.name}
              <Year>{season.air_date ? season.air_date.slice(0, 4) : ""}</Year>
            </PartTitle>
          </Part>
        ))}
      </PartsBox>
    </Container>
  );
};

export default Seasons;
