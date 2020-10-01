import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 10px 13px -7px #000000,
    -19px -50px 22px -30px rgba(0, 0, 0, 0),
    0px 0px 50px 0px rgba(255, 255, 255, 0.2);
`;

const Rating = styled.span`
  position: absolute;
  bottom: 12px;
  right: 10px;
  opacity: 0;
`;
const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 3px;

  :hover {
    ${Rating} {
      opacity: 1;
    }
    ${Img} {
      opacity: 0.3;
    }
  }
`;
const Title = styled.h1``;
const Year = styled.span`
  font-size: 10px;
  opacity: 0.6;
`;

const Poster = ({ title, imgUrl, rating, year, isMovie = false, id }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <ImgContainer>
        <Img
          src={
            imgUrl
              ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
              : require("../assets/noPosterSmall.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImgContainer>

      <Title>
        {title && title.length > 17 ? `${title.slice(0, 17)}...` : title}
      </Title>
      <Year>{year ? year.slice(0, 4) : ""}</Year>
    </Link>
  );
};

export default Poster;
