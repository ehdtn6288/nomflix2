import React from "react";
import styled from "styled-components";
import Poster from "../Components/Poster";

const Container = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  padding: 25px;
  border-radius: 10px;
  max-height: 490px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(47, 54, 64, 1);
    border-radius: 5px;
  }
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
const Name = styled.div``;
const Overview = styled.div`
  margin-top: 15px;
`;

const PartsBox = styled.div`
  margin-top: 25px;
  width: 100%;

  display: grid;
  justify-content: left;
  grid-gap: 27px;
  grid-template-columns: repeat(auto-fit, 130px);
`;

const Collections = ({
  location: {
    state: {
      collection: data,
      collection: { parts },
    },
  },
}) => {
  console.log(parts);
  return (
    <Container>
      <InfoBox>
        <CollectionPoster
          src={
            data &&
            data.poster_path &&
            `https://image.tmdb.org/t/p/w500/${data.poster_path}`
          }
        />
        <Info>
          <Name>{data.name}</Name>
          <Overview>{data.overview}</Overview>
        </Info>
      </InfoBox>

      <PartsBox>
        {parts.map((part, index) => (
          <Poster
            key={index}
            title={part.title}
            isMovie={true}
            id={part.id}
            imgUrl={part.poster_path}
            rating={part.vote_average}
            year={part.release_date}
          />
        ))}
      </PartsBox>
    </Container>
  );
};

export default Collections;
