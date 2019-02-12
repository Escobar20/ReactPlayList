import React, { Component } from "react";
import PlayList from "./playlist";
import Cover from "./cover";
import SearchBar from "./searchbar";

import datas from "../files/tracks";

class Container extends Component {
  state = {
    isPlaying: false,
    data: undefined,
    selected: ["Darkside", "Swimming Pool Summer", "Faded"]
  };

  constructor() {
    super();
    this.state.data = datas.tracks;
  }

  // componentDidMount = () => {
  //   const selected = datas.tracks.map(object => {
  //     if (this.state.selected.includes(object.name)) return object;
  //   });
  //   this.setState({ data: selected });
  // };

  sendSelected(values) {
    console.log("Track selected", values);
  }

  render() {
    console.log("datos", this.state.data);
    return (
      <div>
        <SearchBar
          datas={this.state.data}
          newList={this.sendSelected.bind(this)}
        />{" "}
        <br />
        <div className="row">
          <div className="col-xs-12 col-lg-3 col-xl-4">
            <Cover isPlaying={this.state.isPlaying} />
          </div>
          <div className="col-xs-12 col-lg-9 col-xl-8">
            <PlayList datas={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
