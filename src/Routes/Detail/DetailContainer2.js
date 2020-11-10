import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, TVApi } from "../../api";
const amount = 200;
let initial = 0;
const DetailContainer2 = (props) => {
  // const [initial, setInitial] = useState(0);
  initial = 0; //라우터간 전환이 있을때, 이 값을 초기화 해줘야 한다. 즉, 화면이 다시 렌더링 될때, 초기화 해줘야한다.
  console.log("dkfdjkdj", initial);
  const {
    location: { pathname },
  } = props;
  const [state, setState] = useState({
    result: null,
    error: null,
    loading: true,
    isMovie: pathname.includes("/movie/"),
    pathname: pathname,
    videoIndex: 0,
    slider: {
      Left: (e) => {
        const slide = e.target.parentNode.children[2];
        // console.log(slide.offsetWidth);
        if (initial < 0) {
          // setInitial(+amount);
          initial += amount;
          console.log(initial);
          slide.style.transform = "translateX(" + initial + "px)";
        }
      },
      Right: (e) => {
        const slide = e.target.parentNode.children[2];
        const slideBoxWidth = e.target.parentNode.offsetWidth; //프로필 다 보이게 하기, 화면 크기에 따라 짤리는 프로필 없게 하기 위함
        if (initial <= 0 && -initial < slide.offsetWidth - slideBoxWidth) {
          console.log("빼기", slide.offsetWidth - slideBoxWidth);
          // setInitial(-amount);
          initial -= amount;
          console.log(initial);
          slide.style.transform = "translateX(" + initial + "px)";
        }
      },
    },
  });

  const VideoSlider = (e) => {
    console.log(e.target.children[0].innerHTML);
    const videoIndex = e.target.children[0].innerHTML - 1;
    setState({ ...state, videoIndex });
  };

  useEffect(() => {
    // const { isMovie } = state;
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = props;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let results = null;
    const getData = async () => {
      //!!중요!! useEffect 자체에 async 를 주면 안된다... async가 걸려있으면, 컴포넌트가 unmount 되어도 비동기 상태가 끝나지 않은것으로 간주되어,
      // 메모리 누수 경고가 뜨게 된다. 따라서, useEffect 안에 따로 async 함수를 선언해주고, 실행시키는 방식으로 해야된다.
      try {
        if (isMovie) {
          const { data: result } = await movieApi.detail(parsedId);
          results = result;
        } else {
          const { data: result } = await TVApi.detail(parsedId);
          results = result;
        }
        console.log("ssss", result);
      } catch {
        setState({ ...state, error: "Can't find any info." });
      } finally {
        setState({ ...state, loading: false, result: results });
      }
    };
    getData();
  }, []);

  // console.log(this.state.result);
  const { result, loading, isMovie, slider, videoIndex } = state;
  console.log("result", result);

  const {
    match: {
      params: { info },
    },
  } = props;
  // console.log(props);

  return (
    <DetailPresenter
      result={result}
      loading={loading}
      info={info}
      isMovie={isMovie}
      slider={slider}
      videoIndex={videoIndex}
      VideoSlider={VideoSlider}
    />
  );
};
export default DetailContainer2;
