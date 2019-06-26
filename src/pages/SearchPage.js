import React, { Component } from "react";
import OrganizationsList from "../components/OrganizationsList";
import { getOrganizationsList } from "../API";

export default class SearchPage extends Component {
    state = {
        organizations: [],
        inputValue: ""
    };

    handleOnChange = ({ target: { value } }) => {
        this.setState({
            inputValue: value
        });
    };

    hangleOnSearch = () => {
        const { inputValue } = this.state;
        getOrganizationsList(inputValue).then(list => {
            console.log(list);
            this.setState({
                organizations: list
            });
        });
    };

    render() {
        const { inputValue, organizations } = this.state;
        const { match } = this.props;
        return (
            <div className="container">
                <div className="d-flex my-4">
                    <input
                        className="form-control mr-2"
                        type="search"
                        placeholder="Search"
                        value={inputValue}
                        onChange={this.handleOnChange}
                    />
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.hangleOnSearch}
                    >
                        Search
                    </button>
                </div>

                <OrganizationsList
                    organizations={organizations}
                    match={match}
                />
            </div>
        );
    }
}
