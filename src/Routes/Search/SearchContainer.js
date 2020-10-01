import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, TVApi } from "../../api";

export default class SearchContainer extends React.Component {
  state = {
    movieResult: null,
    TVResult: null,
    term: "",
    error: null,
    loading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { term } = this.state;
    if (term !== "") {
      this.getTerm();
    }
  };

  changeTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ term: value });
  };

  async getTerm() {
    const { term } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResult },
      } = await movieApi.search(term);
      const {
        data: { results: TVResult },
      } = await TVApi.search(term);
      this.setState({
        movieResult: movieResult,
        TVResult: TVResult,
      });
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movieResult, TVResult, term, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResult={movieResult}
        TVResult={TVResult}
        term={term}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        changeTerm={this.changeTerm}
      />
    );
  }
}
