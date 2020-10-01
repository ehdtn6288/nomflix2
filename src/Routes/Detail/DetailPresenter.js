import React from "react";
import Loading from "../../Components/Loading";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: relative;
  padding: 50px;
  color: white;
`;

const BackDrop = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  filter: blur(4px);
  opacity: 0.5;
  z-index: -10;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 29% 50% 36%);
`;
const Cover = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 13px -7px #000000,
    0px 0px 50px 5px rgba(255, 255, 255, 0),
    0px 17px 50px 5px rgba(0, 0, 0, 0.61);
`;
const Data = styled.div`
  margin-left: 15px;
`;
const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 7px;
`;
const Information = styled.div`
  display: flex;
`;
const Divider = styled.span`
  margin: 0px 5px;
`;
const Runtime = styled.span``;
const Year = styled.span``;
const Genres = styled.ul`
  display: flex;
`;
const OverView = styled.div`
  line-height: 1.4;

  margin-top: 15px;
`;
const InfoBar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) =>
    props.current ? "rgb(47, 54, 64, 1)" : "rgb(220, 221, 225,0.5)"};
  width: 100px;
  height: 30px;
  :not(:last-child) {
    margin-right: 15px;
  }
  :hover {
    background-color: rgb(47, 54, 64, 0.8);
  }
  box-shadow: 0px 10px 13px -7px #000000,
    0px 10px 30px 5px rgba(160, 160, 160, 0.21);
`;
const BgBox = styled.div`
  background-color: rgb(10, 10, 10, 0.5);
  padding: 15px 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0px 10px 13px -7px #000000,
    0px 17px 30px 5px rgba(160, 160, 160, 0.21);
`;
const SlideBox = styled.div`
  width: 100%;
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
`;
const CastingBox = styled.div`
  width: ${(props) => `${props.width}px`};
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
`;
const Profile = styled.div`
  width: 90px;
  height: 170px;
  margin-right: 10px;
`;
const ActorImage = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  margin-bottom: 5px;
  width: 100%;
  height: 135px;
  border-radius: 3px;
  box-shadow: 0px 10px 13px -7px #000000,
    0px 17px 30px 5px rgba(160, 160, 160, 0.21);
`;
const ActorName = styled.div`
  font-size: 11px;
`;

const Left = styled.button`
  font-weight: 400;
  color: white;
  border: none;
  outline: none;
  opacity: 0.7;
  font-size: 17px;
  transform: scaleY(2.5);
  position: absolute;
  left: 6px;
  top: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.1s linear;
  background-color: transparent;
  :hover {
    opacity: 1;
  }
  :active {
    transform-origin: center center;
    transform: scale(1.1, 2.7);
  }
`;
const Right = styled.button`
  font-weight: 400;
  color: white;
  border: none;
  outline: none;
  opacity: 0.7;
  font-size: 17px;
  transform: scaleY(2.5);
  position: absolute;
  right: 6px;
  top: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.1s linear;
  background-color: transparent;
  :hover {
    opacity: 1;
  }
  :active {
    transform-origin: center center;
    transform: scale(1.1, 2.7);
  }
`;

const DetailPresenter = ({ result, loading, info, isMovie, slider }) => {
  return loading ? (
    <Loading />
  ) : (
    <Container>
      <BackDrop
        bgUrl={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${result.backdrop_path}`
            : require("../../assets/noPosterSmall.png")
        }
      />
      <Content>
        <Cover
          imgUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        ></Cover>
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <Information>
            <Year>
              {result.release_date
                ? result.release_date.slice(0, 4)
                : result.first_air_date.slice(0, 4)}
            </Year>
            <Divider>|</Divider>
            <Runtime>
              {result.runtime
                ? `${result.runtime}min`
                : `${result.episode_run_time}min`}
            </Runtime>
            <Divider>|</Divider>
            <Genres>
              {result.genres
                ? result.genres.map((genre, index) => (
                    <li key={index}>
                      {genre.name}
                      {result.genres.length === index + 1 ? "" : "•"}
                    </li>
                  ))
                : ""}
            </Genres>
          </Information>
          <OverView>{result.overview}</OverView>

          <InfoBar>
            <MenuLink
              to={`/${isMovie ? "movie" : "show"}/${result.id}`}
              current={!info}
            >
              <span>Info</span>
            </MenuLink>
            <MenuLink
              to={`/${isMovie ? "movie" : "show"}/${result.id}/company`}
              current={info === "company"}
            >
              <span>Company</span>
            </MenuLink>
            <MenuLink
              to={`/${isMovie ? "movie" : "show"}/${result.id}/actors`}
              current={info === "actors"}
            >
              <span>Actors</span>
            </MenuLink>
          </InfoBar>

          {info === undefined && (
            <BgBox>
              <SlideBox>
                <Left onClick={slider.Left}> &lt; </Left>
                <Right onClick={slider.Right}> &gt; </Right>
                <CastingBox
                  className="slide"
                  width={(result.credits.cast.length + 1) * 100}
                >
                  {result.credits.cast.map((cast, index) => (
                    <Profile key={index}>
                      <ActorImage
                        imgUrl={
                          cast.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                            : require("../../assets/noPosterSmall.png")
                        }
                      ></ActorImage>
                      <ActorName>
                        <div>{cast.character}</div>
                        <div>({cast.name})</div>
                      </ActorName>
                    </Profile>
                  ))}
                </CastingBox>
              </SlideBox>
            </BgBox>
          )}

          {info && info === "company" && <div>Company</div>}
          {info && info === "actors" && <div>Actors</div>}
        </Data>
      </Content>
    </Container>
  );
};
export default DetailPresenter;
