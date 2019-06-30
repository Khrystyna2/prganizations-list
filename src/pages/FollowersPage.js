import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getFollowersUser } from "../API";

export default class FollowersPage extends Component {
  state = {
    followers: []
  };

  componentDidMount() {
    const { params } = this.props.match;

    getFollowersUser(params.login).then(followers =>
      this.setState({ followers })
    );
  }

  render() {
    const { followers } = this.state;
    return (
      <div className="container">
        <h3 className="text-center my-3">Followers list</h3>
        <ul className="list-group my-4">
          {followers &&
            followers.length > 0 &&
            followers.map(follower => (
              <li
                key={follower.login}
                className=" my-2 d-flex align-items-center"
              >
                <div className="member-avatar">
                  <img src={follower.avatar_url} alt="" />
                </div>
                <div className="member-desc">
                  <h5 className="user-name">
                    <Link to={`/user/${follower.login}`}>{follower.login}</Link>
                  </h5>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
