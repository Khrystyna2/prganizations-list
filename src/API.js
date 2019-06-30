import axios from "axios";

const getOrganizationsList = queryStr =>
  axios
    .get(`https://api.github.com/search/users?q=type:org%20${queryStr}`)
    .then(res => res.data.items)
    .catch(err => console.log(err));

const getOrganizationInfo = org => {
  const getOrganization = () => axios.get(`https://api.github.com/orgs/${org}`);
  const getOrganizationMembers = () =>
    axios.get(`https://api.github.com/orgs/${org}/members`);

  return axios
    .all([getOrganization(), getOrganizationMembers()])
    .then(res => ({
      organization: res[0].data,
      members: res[1].data
    }))
    .catch(err => console.log(err));
};

const getFollowersUser = login =>
  axios
    .get(`https://api.github.com/users/${login}/followers`)
    .then(res => res.data)
    .catch(err => console.log(err));

const getFollowingUser = login =>
  axios
    .get(`https://api.github.com/users/${login}/following`)
    .then(res => res.data)
    .catch(err => console.log(err));

const getUser = login =>
  axios
    .get(`https://api.github.com/users/${login}`)
    .then(res => res.data)
    .catch(err => console.log(err));

export {
  getOrganizationsList,
  getFollowersUser,
  getFollowingUser,
  getUser,
  getOrganizationInfo
};
