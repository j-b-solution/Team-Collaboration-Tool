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

export function decodeToken(jwtToken) {
    try {
        const decoded = decode(jwtToken);
        
    }catch {
        
    }
}

export default { isLoggedIn, userId };
