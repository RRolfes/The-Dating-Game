const API_URL = 'https://damp-savannah-20880.herokuapp.com';

export const USERS_URL = (user_id) => `${API_URL}/auth/users/${user_id}`;
