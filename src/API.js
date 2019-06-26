import axios from "axios";

const getOrganizationsList = queryStr =>
    axios
        .get(`https://api.github.com/search/users?q=type:org%20${queryStr}`)
        .then(res => res.data.items)
        .catch(err => console.log(err));

const getOrganization = org =>
    axios
        .get(`https://api.github.com/orgs/${org}`)
        .then(res => res.data)
        .catch(err => console.log(err));

const getMembersOrganization = org =>
    axios
        .get(`https://api.github.com/orgs/${org}/members`)
        .then(res => res.data)
        .catch(err => console.log(err));

export { getOrganizationsList, getOrganization, getMembersOrganization };
