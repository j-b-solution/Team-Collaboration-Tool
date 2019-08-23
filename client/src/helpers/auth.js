// export const setToken = (idToken) => {
//     localStorage.setItem("id_token", idToken);
// };

// export const getToken = () => {
//     return localStorage.getItem("id_token");
// }
import decode from "jwt-decode";

export function isLoggedIn() {
    return sessionStorage.getItem('token') !== null
}

export function userId(){
 return sessionStorage.getItem('user')
}

export function decodeTokenToJson() {
    try {
        if(sessionStorage.getItem('token')) {
            const decoded = decode(sessionStorage.getItem('token'));
            return decoded;
        }
        return ;
    }catch(error) {
        return error;
    }
}

export default { isLoggedIn, userId, decodeTokenToJson };
