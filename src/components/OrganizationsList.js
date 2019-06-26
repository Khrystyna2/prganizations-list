import React from "react";
import { Link } from "react-router-dom";

const OrganizationsList = ({ organizations, match }) => {
    return (
        <ul className="list-group">
            {organizations.length &&
                organizations.map(organization => (
                    <li key={organization.id}>
                        <Link
                            to={`${match.url}organization/${
                                organization.login
                            }`}
                        >
                            {organization.login}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default OrganizationsList;
