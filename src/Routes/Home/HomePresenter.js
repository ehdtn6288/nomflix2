import React from "react";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loading from "../../Components/Loading";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="Now Playing">
              {nowPlaying.map((movie, index) => (
                <Poster
                  key={index}
                  title={movie.title}
                  isMovie={true}
                  id={movie.id}
                  imgUrl={movie.poster_path}
                  rating={movie.vote_average}
                  year={movie.release_date}
                />
              ))}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming">
              {upcoming.map((movie, index) => (
                <Poster
                  key={index}
                  title={movie.title}
                  isMovie={true}
                  id={movie.id}
                  imgUrl={movie.poster_path}
                  rating={movie.vote_average}
                  year={movie.release_date}
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular">
              {popular.map((movie, index) => (
                <Poster
                  key={index}
                  title={movie.title}
                  isMovie={true}
                  id={movie.id}
                  imgUrl={movie.poster_path}
                  rating={movie.vote_average}
                  year={movie.release_date}
                />
              ))}
            </Section>
          )}
        </Container>
      )}
    </>
  );
};
export default HomePresenter;
