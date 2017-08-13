import axios from 'axios';

export const updateUser = (user) => {
  return axios({
    method: 'PATCH',
    url: `http://localhost:3000/users/${user.id}`,
    data: user
  });
};

export const signin = user => {
  return axios({
    method: 'POST',
    url: `http://localhost:3000/users/${user.id}`,
    data: user
  });
};
