import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Poster from "../Components/Poster";

const Container = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  padding: 25px;
  border-radius: 10px;
`;

const InfoBox = styled.div`
  display: flex;
`;
const CollectionPoster = styled.img`
  width: 130px;
`;
const Info = styled.div`
  margin-left: 30px;
`;
const Name = styled.div`
  font-size: 22px;
`;
const Overview = styled.div`
  margin-top: 15px;
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
  grid-template-columns: repeat(auto-fit, 160px);
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
  width: 120px;
`;
const PartPoster = styled.img`
  width: 160px;
  height: 100px;
  border-radius: 5px;
`;
const PartTitle = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;
const Posterk = styled(Poster)`
  width: 100px;
`;

const Episodes = ({
  location: {
    state: { episodes: data },
  },
}) => {
  console.log(data);
  return (
    <Container>
      <Name>Episodes</Name>
      <PartsBox>
        {data.episodes.map((episode, index) => (
          <Part key={index}>
            <PartPoster
              src={
                episode.still_path
                  ? `https://image.tmdb.org/t/p/w500/${episode.still_path}`
                  : require("../assets/noPosterSmall.png")
              }
            />
            <PartTitle>{episode.name}</PartTitle>
          </Part>
        ))}
        {/* {data.episodes.map((episode, index) => (
          <Poster
            key={index}
            title={episode.name}
            isMovie={true}
            id={episode.id}
            imgUrl={episode.still_path}
            rating={episode.vote_average}
            year={episode.air_date}
          />
        ))} */}
      </PartsBox>
    </Container>
  );
};

export default Episodes;
