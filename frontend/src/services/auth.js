import AppAxios from "../apis/AppAxios"
import jwt_decode from "jwt-decode"
// import jwt_decode from "jwt-decode"

export const login = async (username, password) => {


    const body = {
        username: username,
        password: password
    }
    try{
        const ret = await AppAxios.post("/users/auth", body)
        const jwt_decoded = jwt_decode(ret.data);
        const userId = jwt_decoded.userId;
        window.localStorage.setItem('jwt',ret.data);
        window.localStorage.setItem('role',jwt_decoded.role.authority);
        window.localStorage.setItem('userId', userId); 
        window.location.replace("/");
    }catch(err){
        alert("Neuspesan login");
        console.log(err);
    }
}

export const logout = () => {
    window.localStorage.removeItem("jwt")
    window.localStorage.removeItem("role")
    window.localStorage.removeItem('userId'); 
    window.location.replace("/")
}