import React from "react";
import Loading from "../../Components/Loading";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import styled from "styled-components";
import Message from "../../Components/Message";

const Container = styled.div`
  padding: 20px 20px;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 40px;
`;

const Input = styled.input`
  all: unset;
  padding: 10px;
  font-size: 25px;
  border-bottom: 2px solid rgb(40, 40, 40, 0.6);
  transition: 0.2s linear;
  :focus {
    border-bottom: 2px solid rgb(50, 50, 50, 0.8);
  }
`;

const SearchPresenter = ({
  movieResult,
  TVResult,
  term,
  error,
  loading,
  handleSubmit,
  changeTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search for .. "
        value={term}
        onChange={changeTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loading />
    ) : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section title="Movies">
            {movieResult.map((movie, index) => (
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
        {TVResult && TVResult.length > 0 && (
          <Section title="TV Shows">
            {TVResult.map((tv, index) => (
              <Poster
                key={index}
                title={tv.name}
                id={tv.id}
                imgUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.release_date}
              />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message color="red" text={error} />}
    {movieResult &&
      TVResult &&
      movieResult.length === 0 &&
      TVResult.length === 0 &&
      !loading && <Message text="Not Found." color="rgb(255,255,255,0.6)" />}
  </Container>
);

export default SearchPresenter;
