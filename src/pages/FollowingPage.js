import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getFollowingUser } from "../API";

export default class FollowingPage extends Component {
  state = {
    following: []
  };

  componentDidMount() {
    const { params } = this.props.match;
    getFollowingUser(params.login).then(list =>
      this.setState({
        following: list
      })
    );
  }

  render() {
    const { following } = this.state;

    return (
      <div className="container">
        Following list
        <ul className="list-group my-4">
          {following &&
            following.length > 0 &&
            following.map(follower => (
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
