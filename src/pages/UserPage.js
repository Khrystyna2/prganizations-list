import React, { Component } from "react";
import { getUser } from "../API";

export default class UserPage extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    const { params } = this.props.match;
    getUser(params.login).then(list => {
      // console.log("user", list);
      this.setState({
        user: list
      });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 col-sm-4 col-md-3">
            <img src={user.avatar_url} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-sm-8 col-md-9">
            <h2>{user.name || user.login}</h2>
            <span>Followers: {user.followers}</span>
            <br />
            <span>Following: {user.following}</span>
          </div>
        </div>
      </div>
    );
  }
}
