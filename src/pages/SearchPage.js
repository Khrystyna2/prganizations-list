import React, { Component } from "react";

import { getOrganizationsList } from "../API";

import OrganizationsList from "../components/OrganizationsList";

export default class SearchPage extends Component {
  state = {
    organizations: [],
    inputValue: ""
  };

  handleOnChange = ({ target: { value } }) =>
    this.setState({
      inputValue: value
    });

  handleOnSearch = e => {
    const { inputValue } = this.state;

    e.preventDefault();

    if (inputValue !== "") {
      getOrganizationsList(inputValue).then(organizations =>
        this.setState({ organizations, inputValue: "" })
      );
    }
  };

  render() {
    const { inputValue, organizations } = this.state;
    const { match } = this.props;
    return (
      <div className="container">
        <div className="d-flex my-4">
          <form onSubmit={this.handleOnSearch} className="d-flex w-100">
            <input
              className="form-control mr-2"
              type="search"
              placeholder="Enter organization"
              value={inputValue}
              onChange={this.handleOnChange}
            />
            <button type="submit" className="btn btn-warning">
              Search
            </button>
          </form>
        </div>
        {organizations && organizations.length > 0 && (
          <OrganizationsList organizations={organizations} match={match} />
        )}
      </div>
    );
  }
}
