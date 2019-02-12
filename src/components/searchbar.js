import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchString: "" };

  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    var tracklist = this.props.datas;
    var searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      tracklist = tracklist.filter(function(i) {
        var match = i.name.toLowerCase().match(searchString);
        return match;
      });
    }
    return (
      <div>
        <div className="input-group stylish-input-group">
          <input
            type="text"
            value={this.state.searchString}
            onKeyPress={this.props.newList.bind(this, tracklist)}
            onChange={this.handleChange}
            placeholder="Search"
            className="form-control"
          />
          <span className="input-group-addon">
            <button
              type="submit"
              onClick={this.props.newList.bind(this, tracklist)}
            >
              <span className="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
