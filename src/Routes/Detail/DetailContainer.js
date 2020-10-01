import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, TVApi } from "../../api";
const amount = 200;
let initial = 0;

export default class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      pathname: pathname,
      slider: {
        Left: (e) => {
          const slide = e.target.parentNode.children[2];
          console.log(slide.offsetWidth);
          if (initial < 0) {
            initial += amount;
            slide.style.transform = "translateX(" + initial + "px)";
          }
        },
        Right: (e) => {
          const slide = e.target.parentNode.children[2];
          const slideBoxWidth = e.target.parentNode.offsetWidth; //프로필 다 보이게 하기, 화면 크기에 따라 짤리는 프로필 없게 하기 위함
          if (initial <= 0 && -initial < slide.offsetWidth - slideBoxWidth) {
            initial -= amount;
            slide.style.transform = "translateX(" + initial + "px)";
          }
        },
      },
    };
  }

  async componentDidMount() {
    const { isMovie } = this.state;
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    console.log(this.props);
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.detail(parsedId));
      } else {
        ({ data: result } = await TVApi.detail(parsedId));
      }
      console.log(result);
    } catch {
      this.setState({ error: "Can't find any info." });
    } finally {
      this.setState({ loading: false, result: result });
    }
  }

  render() {
    // console.log(this.state.result);
    const { result, loading, isMovie, slider } = this.state;
    const {
      match: {
        params: { info },
      },
    } = this.props;
    initial = 0; //라우터간 전환이 있을때, 이 값을 초기화 해줘야 한다. 즉, 화면이 다시 렌더링 될때, 초기화 해줘야한다.
    console.log(this.props);
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        info={info}
        isMovie={isMovie}
        slider={slider}
      />
    );
  }
}
