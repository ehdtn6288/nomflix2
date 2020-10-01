import React from "react";
import TVPresenter from "./TVPresenter";
import { TVApi } from "../../api";

export default class TVContainer extends React.Component {
  state = {
    airingToday: null,
    popular: null,
    topRated: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: airingToday },
      } = await TVApi.airingToday();
      const {
        data: { results: popular },
      } = await TVApi.popular();
      const {
        data: { results: topRated },
      } = await TVApi.topRated();
      this.setState({
        airingToday: airingToday,
        popular: popular,
        topRated: topRated,
      });
    } catch {
      this.setState({ error: "Can't find TV infos." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    console.log(this.state);
    const { airingToday, popular, topRated, error, loading } = this.state;
    return (
      <TVPresenter
        airingToday={airingToday}
        popular={popular}
        topRated={topRated}
        error={error}
        loading={loading}
      />
    );
  }
}
