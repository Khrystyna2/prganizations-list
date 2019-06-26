import axios from "axios";

const getOrganizationsList = queryStr =>
    axios
        .get(`https://api.github.com/search/users?q=type:org%20${queryStr}`)
        .then(res => res.data.items)
        .catch(err => console.log(err));

const getOrganization = queryStr =>
    axios
        .get(`https://api.github.com/orgs/${queryStr}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));

export { getOrganizationsList, getOrganization };
