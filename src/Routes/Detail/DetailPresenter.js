import React from "react";
import Loading from "../../Components/Loading";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Collections from "../../Components/Collections";
import Episodes from "../../Components/Episodes";
import Seasons from "../../Components/Seasons";

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
  /* display: flex; */
  display: grid;
  grid-template-columns: minmax(450px, 29%) minmax(860px, 60%);
  /* grid-template-rows: calc(100vh - 180px); */
`;
const Cover = styled.img`
  background-image: url(${(props) => props.imgUrl});
  /* background-position: center center;
  background-size: cover; */
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
  display: flex;
  /* align-items: baseline; */
`;
const ImDbLink = styled.a`
  padding-top: 3px;
  margin-left: 10px;
  border-radius: 10px;
`;
const ImDbLogo = styled.img`
  width: 50px;
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
  margin-bottom: 15px;
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

const CompanyBox = styled.div`
  width: 100%;
  height: initial;
  max-height: 390px;
  background-color: rgb(80, 80, 80, 0.4);
  border-radius: 5px;
  padding: 20px;
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
const Company = styled.div`
  display: grid;
  grid-template-columns: 40% auto;
  align-items: center;
  padding: 10px;
`;
const CompanyName = styled.span``;
const CompanyLogo = styled.img`
  width: 80px;
  margin-left: 15px;
`;
const VideoBox = styled.div`
  background-color: rgb(10, 10, 10, 0.9);
  padding: 25px;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 600px 1fr;
`;
const VideoSlide = styled.div`
  width: 600px;

  overflow: hidden;
`;
const VideoList = styled.div`
  width: ${(props) => `${props.videoLength * 600}px`};
  transform: ${(props) =>
    props.videoIndex ? `translateX(-${props.videoIndex * 600}px)` : ""};

  display: flex;
  transition: transform 0.5s ease-in-out;
`;
const Video = styled.iframe`
  width: 600px;
  height: 350px;
`;
const VideoIndexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  overflow: auto;
  max-height: 400px;
  scrollbar-color: rgb(47, 54, 64, 1) rgb(220, 221, 225, 0.3);
  scrollbar-width: thin;

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
  /* Handle on hover */
`;
const VideoIndex = styled.div`
  color: white;
  font-size: 0.8em;
  border-radius: 5px;

  border: none;
  outline: none;

  padding: 10px;
  background-color: ${(props) =>
    props.isIndex ? "rgb(47, 54, 64, 1)" : "rgb(220, 221, 225,0.2)"};
  margin-right: 5px;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 18px;
  }
  :hover {
    background-color: rgb(47, 54, 64, 0.8);
  }
  /* box-shadow: 0px 10px 13px -7px #000000,
    0px 10px 30px 5px rgba(160, 160, 160, 0.21); */
  span {
    display: none;
  }
`;
const DetailPresenter = ({
  result,
  collection,
  episodes,
  loading,
  info,
  isMovie,
  slider,
  VideoSlider,
  videoIndex,
}) => {
  console.log(episodes, "!!!!!!!!!!!");
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
          src={
            result.poster_path
              ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        ></Cover>
        <Data>
          <Title>
            {result.title ? result.title : result.name}
            <ImDbLink
              href={`https://www.imdb.com/title/${result.imdb_id}`}
              target="_blank"
            >
              <ImDbLogo src={require("../../assets/imdb.logo.png")} />
            </ImDbLink>
          </Title>

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
            <Divider>|</Divider>
            <span>
              {result.origin_country ||
                result.production_countries[0].iso_3166_1}
            </span>
          </Information>

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
              to={`/${isMovie ? "movie" : "show"}/${result.id}/trailers`}
              current={info === "trailers"}
            >
              <span>Trailers</span>
            </MenuLink>
            {collection && (
              <MenuLink
                to={{
                  pathname: `/${isMovie ? "movie" : "show"}/${
                    result.id
                  }/collections`,
                  state: { collection: collection.data },
                }}
                current={info === "collections"}
              >
                <span>Collections</span>
              </MenuLink>
            )}
            {episodes && episodes.length > 0 && (
              <MenuLink
                to={{
                  pathname: `/${isMovie ? "movie" : "show"}/${
                    result.id
                  }/episodes`,
                  state: { episodes },
                }}
                current={info === "episodes"}
              >
                <span>Episodes</span>
              </MenuLink>
            )}
            {result.seasons && result.seasons.length > 0 && (
              <MenuLink
                to={{
                  pathname: `/${isMovie ? "movie" : "show"}/${
                    result.id
                  }/seasons`,
                  state: { seasons: result.seasons },
                }}
                current={info === "seasons"}
              >
                <span>Seasons</span>
              </MenuLink>
            )}
          </InfoBar>
          {info === "collections" && (
            <Route
              path={`/${isMovie ? "movie" : "show"}/:id/:info`}
              component={Collections}
              exact
            />
          )}

          {info === "episodes" && (
            <Route
              path={`/${isMovie ? "movie" : "show"}/:id/:info`}
              component={Episodes}
              exact
            />
          )}
          {info === "seasons" && (
            <Route
              path={`/${isMovie ? "movie" : "show"}/:id/:info`}
              component={Seasons}
              exact
            />
          )}

          {info === undefined && (
            <>
              <OverView>{result.overview}</OverView>
              <BgBox>
                <SlideBox>
                  <Left onClick={slider.Left}> &lt; </Left>
                  <Right onClick={slider.Right}> &gt; </Right>
                  <CastingBox
                    className="slide"
                    id="slid"
                    width={(result.credits.cast.length + 1) * 100}
                  >
                    {result.credits.cast.length > 0 ? (
                      result.credits.cast.map((cast, index) => (
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
                      ))
                    ) : (
                      <span>No Information.</span>
                    )}
                  </CastingBox>
                </SlideBox>
              </BgBox>
            </>
          )}

          {info &&
            info === "company" &&
            result.production_companies &&
            result.production_companies.length > 0 && (
              <CompanyBox>
                {result.production_companies.map((company) => (
                  <Company>
                    <CompanyName>{company.name}</CompanyName>
                    {company.logo_path && (
                      <CompanyLogo
                        src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                      />
                    )}
                  </Company>
                ))}
              </CompanyBox>
            )}

          {info && info === "trailers" && (
            <VideoBox>
              <VideoSlide id="videoList">
                <VideoList
                  width={result.videos.results.length * 800}
                  videoLength={result.videos.results.length}
                  videoIndex={videoIndex}
                >
                  {result.videos.results.map((video, index) => (
                    <Video
                      src={`https://www.youtube.com/embed/${video.key}`}
                      allowFullScreen
                      frameBorder="0"
                      key={index}
                    ></Video>
                  ))}
                </VideoList>
              </VideoSlide>
              <VideoIndexBox>
                {result.videos.results.length > 0 ? (
                  result.videos.results.map((video, index) => (
                    <VideoIndex
                      onClick={VideoSlider}
                      key={index}
                      isIndex={videoIndex === index}
                    >
                      <span>{`${index + 1}`}</span>
                      {/* {video.name} */}
                      {video.name.includes("Official Trailer")
                        ? `${
                            result.title ? result.title : result.name
                          } | Official Trailer`
                        : video.name.includes("Trailer")
                        ? `${
                            result.title ? result.title : result.name
                          } | Trailer`
                        : video.name.includes("Official Teaser")
                        ? `${
                            result.title ? result.title : result.name
                          } | Official Teaser`
                        : video.name}
                    </VideoIndex>
                  ))
                ) : (
                  <span>No Trailer.</span>
                )}
              </VideoIndexBox>
            </VideoBox>
          )}
        </Data>
      </Content>
    </Container>
  );
};
export default DetailPresenter;
