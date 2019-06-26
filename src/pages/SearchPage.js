import React, { Component } from "react";
import { getOrganizationsList, getOrganization } from "../API";

export default class SearchPage extends Component {
    state = {
        organizationsList: [],
        inputValue: "",
        organization: {}
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
                organizationsList: list
            });
        });
    };

    hangleOrganization = login => {
        getOrganization(login).then(list => {
            this.setState({
                organization: list
            });
        });
    };

    render() {
        const { inputValue, organizationsList } = this.state;
        return (
            <div className="container">
                <input
                    className="form-control my-4"
                    type="search"
                    placeholder="Search"
                    value={inputValue}
                    onChange={this.handleOnChange}
                />
                <button type="button" onClick={this.hangleOnSearch}>
                    Search
                </button>

                <ul>
                    {organizationsList.length &&
                        organizationsList.map(organization => (
                            <li
                                key={organization.id}
                                onClick={() =>
                                    this.hangleOrganization(organization.login)
                                }
                            >
                                {organization.login}
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}
