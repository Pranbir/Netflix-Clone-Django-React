
const USER_API_ENDPOINT = 'https://reqres.in/api/users';

// Promise way to call the API to get the user data
export const getUsersData = (page=1) => {
    return fetch(`${USER_API_ENDPOINT}?page=${page}`)
    .then(res=>res.json());
};