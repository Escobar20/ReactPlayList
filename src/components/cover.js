import React from "react";
import PauseIcon from "../icons/pause";
import PlayIcon from "../icons/play";

import styled from "styled-components";

const Cover = props => {
  const Wrapper = styled.button`
    visibility: visible;
    :hover,
    focus {
      visibility: hidden;
    }
  `;

  return (
    <div>
      <div className="cover-art shadow actionable text-center">
        {props.isPlaying ? (
          <button className="icon cover-art-playback">
            <PauseIcon />{" "}
          </button>
        ) : null}
        {!props.isPlaying ? (
          <button className="icon cover-art-playback">
            <PlayIcon />{" "}
          </button>
        ) : null}
        <div className="cover-art-image cover-art-image-loaded">
          <img
            src={require("../img/cover.jpg")}
            className="rounded img-fluid"
            alt="picture"
          />
        </div>
        <h3> Your Time Capsule </h3>
        <div>
          <button className="btn btn-green"> PLAY </button>
          <p> 51 Songs </p>
        </div>
        <p> &#9825; </p>
      </div>
    </div>
  );
};

export default Cover;
