import React, { Component } from "react";
import ElementList from "./el-list";

class PlayList extends Component {
  render() {
    var components = this.props.datas.map((data, i) => {
      return <ElementList key={i} data={data} />;
    });

    return components;
  }
}

export default PlayList;
