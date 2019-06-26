import React, { Component } from "react";
import { getOrganization, getMembersOrganization } from "../API";

export default class OrganizationPage extends Component {
    state = {
        organization: {},
        members: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        getOrganization(params.login).then(list => {
            this.setState({
                organization: list
            });
        });
        getMembersOrganization(params.login).then(list => {
            this.setState({
                members: list
            });
        });
    }

    render() {
        const { organization, members } = this.state;
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-sm-4 col-md-3">
                        <img
                            src={organization.avatar_url}
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 col-sm-8 col-md-9">
                        <h2>{organization.name}</h2>
                        <p>{organization.description}</p>
                        {/* <p>Followers: {organization.followers}</p>
                        <p>Following: {organization.following}</p> */}
                    </div>
                </div>
                <h3 className="mt-5 text-center">Members organization list</h3>
                <ul className="list-group my-4">
                    {members.length &&
                        members.map(member => (
                            <li
                                key={member.login}
                                className="list-group-item d-flex align-items-center"
                            >
                                <div className="member-avatar">
                                    <img src={member.avatar_url} alt="" />
                                </div>
                                <div className="member-desc">
                                    <h5>{member.login}</h5>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}
