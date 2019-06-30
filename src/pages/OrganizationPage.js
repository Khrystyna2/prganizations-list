import React, { Component } from "react";
import { getOrganizationInfo } from "../API";
import MembersList from "../components/MembersList";
import Loader from "../components/Loader";

export default class OrganizationPage extends Component {
  state = {
    organization: null,
    members: null
  };

  componentDidMount() {
    const { login } = this.props.match.params;
    getOrganizationInfo(login).then(({ members, organization }) => {
      this.setState({ members, organization });
    });
  }

  render() {
    const { organization, members } = this.state;

    return (
      <div className="container">
        {members || organization ? (
          <>
            <div className="row mt-3">
              <div className="col-12 col-sm-4 col-md-3">
                <img
                  src={organization.avatar_url}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-sm-8 col-md-9">
                <h2>{organization.name || organization.login}</h2>
                <p>{organization.description}</p>
                <hr />
                <span>Public gista: {organization.public_gists}</span>
                <br />
                <span>Public repos: {organization.public_repos}</span>
              </div>
            </div>
            <MembersList members={members} />
          </>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
