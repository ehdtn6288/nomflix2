import React from "react";
import Loading from "../../Components/Loading";
import styled from "styled-components";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ airingToday, popular, topRated, error, loading }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Today">
              {airingToday.map((tv, index) => (
                <Poster
                  key={index}
                  id={tv.id}
                  title={tv.original_name}
                  year={tv.first_air_date}
                  rating={tv.vote_average}
                  imgUrl={tv.poster_path}
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular">
              {popular.map((tv, index) => (
                <Poster
                  key={index}
                  id={tv.id}
                  title={tv.original_name}
                  year={tv.first_air_date}
                  rating={tv.vote_average}
                  imgUrl={tv.poster_path}
                />
              ))}
            </Section>
          )}
          {topRated && topRated.length > 0 && (
            <Section title="Top Rated">
              {topRated.map((tv, index) => (
                <Poster
                  key={index}
                  id={tv.id}
                  title={tv.original_name}
                  year={tv.first_air_date}
                  rating={tv.vote_average}
                  imgUrl={tv.poster_path}
                />
              ))}
            </Section>
          )}
        </Container>
      )}
    </>
  );
};

export default TVPresenter;
