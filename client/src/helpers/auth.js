// export const setToken = (idToken) => {
//     localStorage.setItem("id_token", idToken);
// };

// export const getToken = () => {
//     return localStorage.getItem("id_token");
// }

export function isLoggedIn() {
    return sessionStorage.getItem('token') !== null
}

export function userId(){
 return sessionStorage.getItem('user')
}

export default userId;
