const API_URL = 'mongodb://localhost/theDatingGame';

export const USERS_URL = (user_id) => `${API_URL}/auth/users/${user_id}`;
