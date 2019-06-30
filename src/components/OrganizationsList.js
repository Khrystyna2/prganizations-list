import React from "react";
import { Link } from "react-router-dom";

const OrganizationsList = ({ organizations, match }) => (
  <ul>
    {organizations.length > 0 &&
      organizations.map(organization => (
        <li key={organization.id}>
          <Link to={`${match.url}organization/${organization.login}`}>
            {organization.login}
          </Link>
        </li>
      ))}
  </ul>
);

export default OrganizationsList;
