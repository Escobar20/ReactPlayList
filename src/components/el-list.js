import React, { Component } from "react";
import SpeakerIcon from "../icons/speaker";
import PlayIcon from "../icons/play";

class ElementList extends Component {
  state = {
    iconPlay: false
  };

  handleChange = () => {
    if (this.state.iconPlay) {
      this.setState({ iconPlay: false });
    } else {
      this.setState({ iconPlay: true });
    }
  };

  render() {
    return (
      <div className="decorated">
        <div className="media">
          <div className="media-left">
            <a onClick={this.handleChange}>
              {this.state.iconPlay ? <SpeakerIcon /> : <PlayIcon />}
            </a>
          </div>
          &nbsp;&nbsp;
          <div className="media-body">
            <h4 className="media-heading">{this.props.data.name}</h4>
            {this.props.data.type === "EXPLICIT" ? (
              <span className="paint-type"> {this.props.data.type} </span>
            ) : null}
            <span> {this.props.data.author} </span>
            &nbsp;
            <span>•</span>
            &nbsp;
            <span> {this.props.data.album} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ElementList;
