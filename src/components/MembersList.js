import React from "react";
import { Link } from "react-router-dom";

const MembersList = ({ members }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <h3 className="mt-3 text-center">Members list</h3>
        <ul className="list-group my-4">
          {members &&
            members.length > 0 &&
            members.map(member => (
              <li
                key={member.login}
                className="list-group-item d-flex align-items-center"
              >
                <div className="member-avatar">
                  <img src={member.avatar_url} alt="" />
                </div>
                <div className="member-desc">
                  <h5 className="user-name">
                    <Link to={`/user/${member.login}`}>{member.login}</Link>
                  </h5>
                </div>
                <div className="ml-auto group-link">
                  <Link to={`/user/${member.login}/followers`}>Followers</Link>
                  <Link to={`/user/${member.login}/following`}>Following</Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MembersList;
